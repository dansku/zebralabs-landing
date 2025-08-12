import { Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-t from-black to-gray-900/50 border-t border-cyan-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
              ZebraLabs
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Building cutting-edge applications that transform how people interact with technology. 
              Creating intuitive, powerful tools for the future.
            </p>
            <div className="flex items-center gap-2 text-cyan-400">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:dan@zebralabs.org" 
                className="hover:text-cyan-300 transition-colors"
              >
                dan@zebralabs.org
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h4 className="text-white font-semibold mb-4">Apps</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/remindose"
                  className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  ReminDose
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-cyan-300/70 font-mono text-sm tracking-wider" 
             style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.3)' }}>
            © 2025 ZebraLabs OOD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}