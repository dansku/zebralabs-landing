import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import MouseGradient from "@/components/MouseGradient";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);

    try {
      // Call our secure serverless function instead of Beehiiv directly
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setEmail("");
        toast({
          title: "Success! 🚀",
          description: "You've been added to our waitlist. Great things are coming!",
        });
      } else {
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate relative position (-1 to 1)
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Dark Synthwave Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950 to-black"></div>
      
      {/* Dark horizon glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-900/20 via-pink-900/10 to-transparent"></div>

      {/* Minimal Dark Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 39px,
                rgba(0, 255, 255, 0.15) 40px,
                rgba(0, 255, 255, 0.15) 41px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 49px,
                rgba(255, 0, 255, 0.1) 50px,
                rgba(255, 0, 255, 0.1) 51px
              )
            `,
            transform: 'perspective(600px) rotateX(88deg)',
            transformOrigin: 'bottom center'
          }}
        ></div>
      </div>

      {/* Dark Synthwave Mountains - Minimal Wireframe */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          {/* Distant mountain silhouette */}
          <path 
            d="M0,200 L0,120 L200,80 L400,100 L600,70 L800,90 L1000,75 L1200,95 L1200,200 Z" 
            fill="none"
            stroke="rgba(0, 255, 255, 0.4)"
            strokeWidth="1"
          />
          {/* Closer mountain wireframe */}
          <path 
            d="M0,200 L0,150 L150,120 L350,140 L550,110 L750,130 L950,115 L1200,135 L1200,200 Z" 
            fill="rgba(25, 25, 25, 0.6)"
            stroke="rgba(255, 0, 255, 0.5)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Subtle stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <MouseGradient />

      {/* Floating neon orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pt-12 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo with neon glow and mouse tracking */}
          <div className="mb-4">
            <div 
              ref={logoRef}
              className="relative inline-block transition-transform duration-100 ease-out"
              style={{
                transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 15}px, 0) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)`
              }}
            >
              <img 
                src="/logo.png" 
                alt="ZebraLabs" 
                className="mx-auto drop-shadow-2xl" 
                style={{ 
                  height: '510px', 
                  width: 'auto',
                  filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 0, 255, 0.3))',
                  transformStyle: 'preserve-3d'
                }} 
              />
            </div>
          </div>
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }}>
                ZebraLabs
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent" style={{ textShadow: '0 0 10px rgba(255, 0, 255, 0.6)' }}>
                Great Things Are Coming
              </span>
            </h1>
            
            <p className="text-lg text-cyan-200 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}>
              Be the first to know when we launch. <br/>Join our waitlist for exclusive updates and early access.
            </p>

            {/* Email Signup with neon styling */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 h-14 px-6 bg-black/50 border-2 border-cyan-400/50 rounded-full text-cyan-100 placeholder-cyan-300/70 focus:outline-none focus:border-cyan-400 focus:shadow-lg transition-all duration-300 text-lg backdrop-blur-sm"
                style={{ 
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)',
                  textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'
                }}
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="h-14 px-8 rounded-full text-lg font-bold transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border-2 border-pink-400/50 hover:border-pink-400 shadow-lg hover:shadow-pink-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  boxShadow: '0 0 20px rgba(255, 0, 255, 0.4)',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                }}
              >
                {isLoading ? 'Adding you...' : 'Notify Me'}
              </Button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer with synthwave styling */}
      <footer className="relative z-10 px-6 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-300/70 font-mono text-sm tracking-wider" style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.3)' }}>
            ZebraLabs OOD 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
