import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-gray-900 mb-4">
              ZebraLabs
            </div>
            <p className="text-gray-600">
              Building innovative digital products that make a difference.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Apps</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/remindose"
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                >
                  ReminDose
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center space-y-4">
          <div className="flex justify-center items-center gap-6 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              to="/terms-and-conditions" 
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 ZebraLabs OOD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}