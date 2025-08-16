import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavHeader() {
  const location = useLocation();

  return (
    <header className="relative z-50 py-8">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            ZebraLabs
          </Link>
          
          <div className="flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer outline-none">
                Apps
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-gray-200">
                <DropdownMenuItem className="text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-50 cursor-pointer">
                  <Link to="/remindose" className="w-full">Remindose</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              to="/about"
              className={`text-gray-600 hover:text-gray-900 transition-colors ${location.pathname === '/about' ? 'text-gray-900 font-medium' : ''}`}
            >
              About
            </Link>
            
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-gray-900 transition-colors ${location.pathname === '/contact' ? 'text-gray-900 font-medium' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}