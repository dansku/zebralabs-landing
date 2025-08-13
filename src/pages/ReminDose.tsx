import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
import {
    Smartphone,
    Clock,
    CheckCircle,
    Bell,
    Calendar,
    Scale
} from "lucide-react";

const ReminDose = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: 'remindose'
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setEmail("");
        toast({
          title: "Welcome to Remindose! 🎉",
          description: "You'll be first to know when we launch on iOS and Android!",
        });
      } else {
        throw new Error(data.error || 'Failed to join waitlist');
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black flex flex-col">
      <NavHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 border-cyan-500/30 mb-6">
                Coming Soon to iOS & Android
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  Remindose
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Never miss your medication again. Remindose is your intelligent medication companion, 
                ensuring you take the right dose at the right time with smart reminders, comprehensive 
                tracking, and personalized health insights.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Bell className="h-5 w-5" />
                  <span>Smart Reminders</span>
                </div>
                <div className="flex items-center gap-2 text-pink-300">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <Scale className="h-5 w-5" />
                  <span>Weight Tracking</span>
                </div>
              </div>

              {/* Early Access Signup */}
              <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 bg-black/50 border-2 border-cyan-400/50 rounded-lg text-cyan-100 placeholder-cyan-300/70 focus:outline-none focus:border-cyan-400 transition-all"
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="h-12 px-6 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border border-pink-400/30"
                >
                  {isLoading ? 'Joining...' : 'Get Early Access'}
                </Button>
              </form>
            </div>

            {/* Right side - App Preview */}
            <div className="relative">
              <div className="relative mx-auto w-72 h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border-8 border-gray-700 shadow-2xl">
                {/* Phone screen */}
                <div className="absolute inset-4 bg-gray-900 rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center p-4 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="px-4 pb-4">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-cyan-400 mb-2">Remindose</h2>
                      <p className="text-gray-400 text-sm">Today's Schedule</p>
                    </div>
                    
                    {/* Medication cards */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 p-4 rounded-xl border border-cyan-500/30">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-white font-semibold">Morning Pills</h3>
                            <p className="text-gray-400 text-sm">2 medications • 8:00 AM</p>
                          </div>
                          <CheckCircle className="h-6 w-6 text-green-400" />
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-4 rounded-xl border border-pink-500/30">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-white font-semibold">Afternoon Dose</h3>
                            <p className="text-gray-400 text-sm">1 medication • 2:00 PM</p>
                          </div>
                          <Clock className="h-6 w-6 text-yellow-400" />
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-4 rounded-xl border border-purple-500/30">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-white font-semibold">Evening Meds</h3>
                            <p className="text-gray-400 text-sm">3 medications • 7:00 PM</p>
                          </div>
                          <Bell className="h-6 w-6 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Simple to Start, Powerful to Use
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Add Medications</h3>
              <p className="text-gray-400">
                Quickly add your medications by scanning or searching our extensive database
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Set Schedule</h3>
              <p className="text-gray-400">
                Create custom schedules that fit your routine and doctor's instructions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Get Reminders</h3>
              <p className="text-gray-400">
                Receive smart notifications that ensure you never miss a dose
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Track Progress</h3>
              <p className="text-gray-400">
                Monitor your adherence and share reports with healthcare providers
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Coming Soon Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Coming to iOS & Android</h2>
          <p className="text-gray-300 text-lg mb-12">
            We're putting the finishing touches on Remindose. Join our waitlist to be the first 
            to download when we launch! Early supporters will receive exclusive benefits and premium features.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
              <Smartphone className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">iOS App</h3>
              <p className="text-gray-400 mb-4">Available on the App Store</p>
              <Badge variant="outline" className="text-cyan-400 border-cyan-400/50">Coming Q2 2025</Badge>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700">
              <Smartphone className="h-16 w-16 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Android App</h3>
              <p className="text-gray-400 mb-4">Available on Google Play</p>
              <Badge variant="outline" className="text-pink-400 border-pink-400/50">Coming Q2 2025</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands waiting for the most intuitive medication reminder app ever created.
          </p>
          <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 px-6 bg-black/50 border-2 border-cyan-400/50 rounded-full text-cyan-100 placeholder-cyan-300/70 focus:outline-none focus:border-cyan-400 transition-all"
            />
            <Button 
              type="submit"
              disabled={isLoading}
              className="h-14 px-8 rounded-full font-bold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border border-pink-400/30"
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReminDose;