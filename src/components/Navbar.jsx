import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: "/books", label: "Books for Kids" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-r from-[#e8f4ff]/95 via-[#d6ebff]/95 to-[#f8fcff]/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(30,64,175,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-3xl font-black tracking-tight transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="bg-gradient-to-r from-[#0b2559] via-[#1d4ed8] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(29,78,216,0.25)]">
              Storybook
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-80 group-hover:opacity-100 shadow-[0_0_14px_rgba(14,165,233,0.6)]" />
          </Link>

          <div className="hidden md:flex items-center gap-2 rounded-full bg-white/75 px-3 py-2 border border-blue-100 shadow-sm">
            {links.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-[#12326f] hover:bg-blue-100 hover:text-blue-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#12326f] hover:text-blue-700 rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 py-2 space-y-1 bg-white/90 rounded-2xl border border-blue-100 shadow-lg">
              {links.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-[#12326f] hover:bg-blue-100 hover:text-blue-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
