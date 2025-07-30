"use client";
import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
        <nav className="bg-white shadow-lg sticky top-3 z-50 mx-4 sm:mx-16 md:mx-44 mt-7 rounded-l-full rounded-r-full border border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                  Rohit
                </h1>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <a
                    href="#home"
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-blue-50"
                  >
                    Home
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-blue-50"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-blue-50"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-xl font-semibold transition-all duration-300 hover:bg-blue-50"
                  >
                    Contact
                  </a>
                </div>
              </div>
  
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 transition-all duration-200 hover:bg-blue-50 rounded-lg"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 " onClick={toggleMenu}>
            <div className="fixed top-24 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 animate-slideDown" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a
                  href="#skills"
                  className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
                  onClick={toggleMenu}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-50"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
        
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}</style>
      </>
    );
};
  
export default Navbar;