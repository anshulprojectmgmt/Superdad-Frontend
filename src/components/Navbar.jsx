import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-gradient-to-r 
  from-[oklch(70.7%_0.165_254.624)] 
  to-[oklch(98.5%_0_0)] 
  shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-3xl font-bold text-black hover:text-white transition duration-300"
            >
              Storybook
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/books"
              className="text-black hover:text-blue-400 px-3 py-2 rounded-md text-xl font-medium transition duration-300"
            >
              Books for Kids
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-blue-400 px-3 py-2 rounded-md text-xl font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-blue-400 px-3 py-2 rounded-md text-xl font-medium transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-black" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[oklch(93% 0.034 272.788)] rounded-b-lg shadow-md">
              <Link
                to="/books"
                className="text-black hover:bg-blue-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Books for Kids
              </Link>
              <Link
                to="/about"
                className="text-black hover:bg-blue-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-black hover:bg-blue-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
