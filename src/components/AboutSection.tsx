export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          About Remindose
        </h2>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Remindose was born from a simple truth: medication adherence shouldn't be complicated. 
            Every year, millions of people struggle to maintain their medication routines, leading 
            to preventable health complications and billions in healthcare costs.
          </p>
          
          <p>
            Our team of healthcare professionals, engineers, and designers came together with a 
            shared vision: to create the most intuitive, reliable, and comprehensive medication 
            management app ever built. We believe that technology should empower people to take 
            control of their health, not complicate it.
          </p>
          
          <h3 className="text-2xl font-semibold text-white mt-12 mb-6">Our Mission</h3>
          <p>
            To eliminate medication non-adherence by providing intelligent, personalized reminders 
            and insights that adapt to each user's unique lifestyle and health needs. We're not just 
            building an app – we're building a healthier future.
          </p>
          
          <h3 className="text-2xl font-semibold text-white mt-12 mb-6">Why Remindose?</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Evidence-Based</h3>
              <p className="text-gray-400">
                Built on research from leading medical institutions and behavioral science studies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">Privacy-First</h3>
              <p className="text-gray-400">
                Your health data is yours alone. End-to-end encryption and HIPAA compliance guaranteed.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">User-Obsessed</h3>
              <p className="text-gray-400">
                Every feature is designed with real user feedback and tested for simplicity and effectiveness.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-white mt-12 mb-6">Our Team</h3>
          <p>
            Remindose is developed by ZebraLabs, a digital health innovation company dedicated to 
            creating transformative healthcare solutions. Our multidisciplinary team includes doctors, 
            pharmacists, UX designers, and software engineers who are passionate about improving 
            medication adherence worldwide.
          </p>
          
          <div className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 p-8 rounded-xl border border-cyan-500/30 mt-12">
            <p className="text-xl text-center text-white mb-2 font-semibold">
              Join Our Mission
            </p>
            <p className="text-center text-gray-300">
              Be part of the healthcare revolution. Get early access to Remindose and help us 
              shape the future of medication management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}