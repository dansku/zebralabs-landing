export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 flex-grow">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
          About ZebraLabs
        </h2>
        
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            ZebraLabs is a digital product studio focused on creating innovative solutions 
            that solve real-world problems. We believe in the power of technology to 
            transform ideas into impactful products that improve people's lives.
          </p>
          
          <p>
            Our approach combines creative design with technical excellence, delivering 
            products that are both beautiful and functional. We work with passion and 
            precision to bring meaningful digital experiences to life.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Our Mission</h3>
          <p>
            To create digital products that make a meaningful impact. We're not just building 
            software – we're crafting solutions that empower people and organizations to 
            achieve their goals more effectively.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">What We Do</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Product Development</h3>
              <p className="text-gray-600">
                From concept to launch, we build products that users love and businesses need.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Software Engineering</h3>
              <p className="text-gray-600">
                Crafting elegant, scalable solutions with modern technologies and best practices.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Design Innovation</h3>
              <p className="text-gray-600">
                Creating beautiful, intuitive experiences that delight users and drive results.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Our Approach</h3>
          <p>
            We believe in rapid iteration, user-centered design, and building with purpose. 
            Every project starts with understanding the problem deeply, then crafting solutions 
            that are both technically sound and delightfully simple to use.
          </p>
        </div>
      </div>
    </section>
  );
}