import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import MouseGradient from "@/components/MouseGradient";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("ZebraLabs updates subscription");
    const body = encodeURIComponent(`Please add me to the updates list.\n\nEmail: ${email}`);
    window.location.href = `mailto:dan@zebralabs.org?subject=${subject}&body=${body}`;
    setEmail("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-b from-purple-900 via-black to-pink-900">
      <MouseGradient />
      
      {/* Synthwave Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-pink-500/10"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

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
          {/* Logo with neon glow */}
          <div className="mb-4">
            <div className="relative inline-block">
              <img 
                src="/logo.png" 
                alt="ZebraLabs" 
                className="mx-auto drop-shadow-2xl" 
                style={{ 
                  height: '510px', 
                  width: 'auto',
                  filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 0, 255, 0.3))'
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
                className="h-14 px-8 rounded-full text-lg font-bold transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border-2 border-pink-400/50 hover:border-pink-400 shadow-lg hover:shadow-pink-400/50"
                style={{ 
                  boxShadow: '0 0 20px rgba(255, 0, 255, 0.4)',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                }}
              >
                Notify Me
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
