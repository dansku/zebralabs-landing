import { 
  Bell, 
  Calendar, 
  Shield,
  Activity,
  Users,
  Star,
  Clock,
  CheckCircle,
  Smartphone,
  Globe,
  Heart,
  Database
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-6 flex-grow">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Features That Make a Difference
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Remindose combines cutting-edge technology with thoughtful design to create the most 
          comprehensive medication management solution available.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all">
            <Bell className="h-14 w-14 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Smart Reminders</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Customizable notification sounds and vibration patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Snooze options with smart rescheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Location-based reminders for on-the-go doses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Critical medication priority alerts</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all">
            <Activity className="h-14 w-14 text-pink-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Health Analytics</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span>Adherence tracking with visual charts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span>Missed dose patterns and insights</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span>Exportable reports for healthcare providers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <span>Medication efficacy tracking</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all">
            <Shield className="h-14 w-14 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Privacy & Security</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>End-to-end encryption for all data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>HIPAA-compliant infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Biometric app lock options</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Zero third-party data sharing</span>
              </li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-center mb-12 text-white">
          And So Much More...
        </h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Flexible Scheduling</h4>
            <p className="text-gray-400 text-sm">
              Complex schedules, varying doses, as-needed meds
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-pink-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Family Accounts</h4>
            <p className="text-gray-400 text-sm">
              Care for loved ones with shared monitoring
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Drug Database</h4>
            <p className="text-gray-400 text-sm">
              Comprehensive info on thousands of medications
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Interaction Checker</h4>
            <p className="text-gray-400 text-sm">
              Automatic drug interaction warnings
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Refill Reminders</h4>
            <p className="text-gray-400 text-sm">
              Never run out with smart refill alerts
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-pink-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Cross-Platform</h4>
            <p className="text-gray-400 text-sm">
              Sync across all your devices seamlessly
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Multi-Language</h4>
            <p className="text-gray-400 text-sm">
              Available in 15+ languages worldwide
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-pink-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Health Integration</h4>
            <p className="text-gray-400 text-sm">
              Connects with Apple Health & Google Fit
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 p-8 rounded-xl border border-cyan-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Experience the Future of Medication Management?
          </h3>
          <p className="text-gray-300 mb-6">
            Join our waitlist today and be among the first to access all these amazing features.
          </p>
          <a 
            href="/remindose"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold rounded-full transition-all"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  );
}