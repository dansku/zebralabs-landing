import { Mail, MessageCircle, FileText, Users } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 flex-grow">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Have questions about Remindose? We're here to help. Choose the best way to reach us.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 p-8 rounded-xl border border-cyan-500/20">
            <Mail className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">General Inquiries</h3>
            <p className="text-gray-400 mb-4">
              Questions about Remindose, partnerships, or general feedback
            </p>
            <a 
              href="mailto:hello@remindose.app" 
              className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              hello@remindose.app
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-8 rounded-xl border border-pink-500/20">
            <MessageCircle className="h-12 w-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Support</h3>
            <p className="text-gray-400 mb-4">
              Need help with the app or have technical questions?
            </p>
            <a 
              href="mailto:support@remindose.app" 
              className="text-lg text-pink-400 hover:text-pink-300 transition-colors"
            >
              support@remindose.app
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-8 rounded-xl border border-purple-500/20">
            <FileText className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Press & Media</h3>
            <p className="text-gray-400 mb-4">
              Media inquiries, press releases, and interview requests
            </p>
            <a 
              href="mailto:press@remindose.app" 
              className="text-lg text-purple-400 hover:text-purple-300 transition-colors"
            >
              press@remindose.app
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 rounded-xl border border-cyan-500/20">
            <Users className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">Business</h3>
            <p className="text-gray-400 mb-4">
              Enterprise solutions, healthcare partnerships, and B2B inquiries
            </p>
            <a 
              href="mailto:business@remindose.app" 
              className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              business@remindose.app
            </a>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Response Time</h3>
          <p className="text-gray-300 mb-2">
            We typically respond to all inquiries within 24 hours during business days.
          </p>
          <p className="text-gray-400 text-sm">
            Monday - Friday, 9:00 AM - 6:00 PM EST
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Company Information</h3>
          <p className="text-gray-300">
            Remindose is developed by <span className="text-cyan-400">ZebraLabs OOD</span>
          </p>
          <p className="text-gray-400 mt-2">
            Registered in Bulgaria • VAT: BG207496514
          </p>
          <a 
            href="mailto:dan@zebralabs.org" 
            className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            dan@zebralabs.org
          </a>
        </div>
      </div>
    </section>
  );
}