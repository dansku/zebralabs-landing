export default function ContactSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-center max-w-2xl mx-auto">
          <p>
            Ready to transform your ideas into reality? We'd love to hear from you. 
            Let's discuss how ZebraLabs can help bring your vision to life.
          </p>
          
          <div className="mt-12 space-y-6">
            <a 
              href="mailto:dan@zebralabs.org" 
              className="block text-2xl text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              dan@zebralabs.org
            </a>
            
            <p className="text-gray-400">
              Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}