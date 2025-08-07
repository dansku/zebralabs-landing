// Cloudflare Pages Function for Beehiiv subscription
// This keeps your API key secure on the server side

interface Env {
  BEEHIIV_API_KEY: string;
  BEEHIIV_PUBLICATION_ID: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  // Only allow POST requests
  if (context.request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    // Parse the request body
    const { email } = await context.request.json() as { email: string };

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get environment variables (set in Cloudflare Pages dashboard)
    const API_KEY = context.env.BEEHIIV_API_KEY;
    const PUBLICATION_ID = context.env.BEEHIIV_PUBLICATION_ID;

    if (!API_KEY || !PUBLICATION_ID) {
      console.error('Missing Beehiiv credentials');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Call Beehiiv API
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'zebralabs-landing',
        utm_medium: 'website',
        referring_site: context.request.headers.get('Referer') || 'zebralabs.com'
      })
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
        { 
          status: 200, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Allow CORS
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type'
          } 
        }
      );
    } else {
      // Handle Beehiiv API errors
      const errorData = await response.json().catch(() => ({}));
      console.error('Beehiiv API Error:', errorData);
      
      return new Response(
        JSON.stringify({ 
          error: errorData.message || 'Failed to subscribe to newsletter' 
        }),
        { 
          status: response.status, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

  } catch (error) {
    console.error('Subscribe function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Handle preflight CORS requests
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};