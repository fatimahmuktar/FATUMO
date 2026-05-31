import { useState } from 'react';
import { useLocation } from 'wouter';

/**
 * Navigation Component - My Next Adventure
 * Features: Responsive navbar, mobile menu, active link highlighting
 */
export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Planner', path: '/planner' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location === path;

  const handleNavClick = (path: string) => {
    setLocation(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg sticky top-0 z-40 border-b-2 border-purple-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="text-3xl">✈️</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity duration-300">
              My Next Adventure
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`font-semibold transition-all duration-300 pb-2 border-b-2 ${
                  isActive(link.path)
                    ? 'text-purple-600 border-purple-600'
                    : 'text-gray-700 border-transparent hover:text-purple-600 hover:border-purple-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <span className={`w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-700 hover:bg-purple-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
