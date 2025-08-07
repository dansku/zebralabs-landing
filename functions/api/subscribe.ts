// Cloudflare Pages Function for Beehiiv subscription
// This keeps your API key secure on the server side

interface Env {
  BEEHIIV_API_KEY: string;
  BEEHIIV_PUBLICATION_ID: string;
}

// Define types for Cloudflare Pages Functions
interface EventContext<Env = any> {
  request: Request;
  env: Env;
  params: Record<string, string>;
  waitUntil: (promise: Promise<any>) => void;
}

type PagesFunction<Env = any> = (context: EventContext<Env>) => Response | Promise<Response>;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  // Only allow POST requests
  if (context.request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    // Log the request for debugging
    console.log('Subscribe function called:', {
      method: context.request.method,
      url: context.request.url,
      headers: Object.fromEntries(context.request.headers.entries())
    });

    // Parse the request body with better error handling
    let requestBody;
    try {
      requestBody = await context.request.json() as { email: string };
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { email } = requestBody;
    console.log('Received email:', email);

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.error('Invalid email provided:', email);
      return new Response(
        JSON.stringify({ error: 'Valid email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get environment variables (set in Cloudflare Pages dashboard)
    const API_KEY = context.env.BEEHIIV_API_KEY;
    const PUBLICATION_ID = context.env.BEEHIIV_PUBLICATION_ID;

    console.log('Environment check:', {
      hasApiKey: !!API_KEY,
      hasPublicationId: !!PUBLICATION_ID,
      apiKeyLength: API_KEY?.length || 0
    });

    if (!API_KEY || !PUBLICATION_ID) {
      console.error('Missing Beehiiv credentials', {
        API_KEY: !!API_KEY,
        PUBLICATION_ID: !!PUBLICATION_ID
      });
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Call Beehiiv API
    console.log('Calling Beehiiv API:', `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`);
    
    const beehiivPayload = {
      email: email,
      reactivate_existing: false,
      send_welcome_email: true,
      utm_source: 'zebralabs-landing',
      utm_medium: 'website',
      referring_site: context.request.headers.get('Referer') || 'zebralabs.org'
    };
    
    console.log('Beehiiv payload:', beehiivPayload);

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(beehiivPayload)
    });

    console.log('Beehiiv API response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
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