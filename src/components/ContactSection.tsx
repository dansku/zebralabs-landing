import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 flex-grow">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 p-8 rounded-xl border border-cyan-500/20 max-w-md w-full">
            <Mail className="h-12 w-12 text-cyan-400 mb-4 mx-auto" />

            <div className="text-center">
              <p
                className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                contact [at] zebralabs [dot] org
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}