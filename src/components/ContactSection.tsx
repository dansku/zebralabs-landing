import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 flex-grow">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
          Get in Touch
        </h2>

        <p className="text-center text-gray-600 text-lg mb-12">
          We'd love to hear from you. Reach out to discuss your project or ideas.
        </p>
        
        <div className="flex justify-center">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 max-w-md w-full text-center">
            <Mail className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-lg text-gray-600">
              contact [at] zebralabs [dot] org
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}