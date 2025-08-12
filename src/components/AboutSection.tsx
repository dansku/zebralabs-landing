export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          About ZebraLabs
        </h2>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            ZebraLabs is at the forefront of innovation, building cutting-edge applications that 
            transform how people interact with technology. Our mission is to create intuitive, 
            powerful tools that enhance productivity and simplify complex workflows.
          </p>
          
          <p>
            Founded with a vision to bridge the gap between sophisticated technology and everyday 
            usability, we specialize in developing applications that combine beautiful design with 
            robust functionality. Our team is passionate about crafting experiences that users love.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Innovation</h3>
              <p className="text-gray-400">
                Pushing boundaries with cutting-edge technology and creative solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6 rounded-xl border border-pink-500/20">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">Quality</h3>
              <p className="text-gray-400">
                Committed to delivering exceptional products that exceed expectations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">User-Centric</h3>
              <p className="text-gray-400">
                Designing with users in mind, creating intuitive and delightful experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}