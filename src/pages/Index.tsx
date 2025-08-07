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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <MouseGradient />
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="ZebraLabs" className="h-24" style={{ width: 'auto' }} />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pt-12 pb-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-8">
              ZebraLabs
              <br />
              Great Things Are Coming
            </h1>
            
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Be the first to know when we launch. <br/>Join our waitlist for exclusive updates and early access.
            </p>

            {/* Email Signup */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-6 py-4 bg-gray-900 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
              <Button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              >
                Notify Me
              </Button>
            </form>
          </div>


        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">ZebraLabs OOD 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
