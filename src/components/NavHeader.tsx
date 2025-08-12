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
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          >
            ZebraLabs
          </Link>
          
          <div className="flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-cyan-200/80 hover:text-cyan-200 transition-colors cursor-pointer outline-none">
                Apps
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border-gray-700">
                <DropdownMenuItem className="text-cyan-200/80 hover:text-cyan-200 focus:text-cyan-200 focus:bg-cyan-500/10 cursor-pointer">
                  <Link to="/remindose" className="w-full">Remindose</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              to="/about"
              className="text-cyan-200/80 hover:text-cyan-200 transition-colors"
              style={{ textShadow: location.pathname === '/about' ? '0 0 5px rgba(0, 255, 255, 0.5)' : undefined }}
            >
              About
            </Link>
            
            <Link
              to="/features"
              className="text-cyan-200/80 hover:text-cyan-200 transition-colors"
              style={{ textShadow: location.pathname === '/features' ? '0 0 5px rgba(0, 255, 255, 0.5)' : undefined }}
            >
              Features
            </Link>
            
            <Link
              to="/contact"
              className="text-cyan-200/80 hover:text-cyan-200 transition-colors"
              style={{ textShadow: location.pathname === '/contact' ? '0 0 5px rgba(0, 255, 255, 0.5)' : undefined }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}