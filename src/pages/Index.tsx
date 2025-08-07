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
              Be the first to know when we launch. Join our waitlist for exclusive updates and early access.
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

          {/* Stats Cards */}
          <div className="relative mt-24">
            {/* Background placeholder for your image */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-96 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="relative">
              <div className="absolute left-8 top-8 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 max-w-xs">
                <div className="text-5xl font-bold mb-2">98.6%</div>
                <div className="text-gray-400 text-sm">Accuracy rate</div>
              </div>
              
              <div className="absolute right-8 top-16 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 max-w-xs">
                <div className="text-5xl font-bold mb-2">92%</div>
                <div className="text-gray-400 text-sm">Decisions made 10x faster</div>
              </div>
              
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-2 rounded-full text-sm font-medium">
                Jake
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Social Links */}
      <footer className="relative z-10 px-6 pb-8">
        <div className="max-w-7xl mx-auto flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.846-1.378l-.774 2.978c-.287 1.102-1.048 2.482-1.597 3.324C9.672 23.812 10.833 24.029 12.017 24.029c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
