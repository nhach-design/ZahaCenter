import { motion } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SITE_DATA } from '../data';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center gap-2" 
            onClick={() => handleNavClick('home')}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${isScrolled || isMobileMenuOpen ? 'border-amber-600 text-amber-600' : 'border-white text-white'}`}>
              <span className="font-serif font-bold text-xl">Z</span>
            </div>
            <div className={`flex flex-col ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'}`}>
              <span className="font-serif font-bold text-lg leading-none tracking-wide">ZAHA</span>
              <span className="text-[10px] uppercase tracking-widest opacity-80">Centre</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-amber-600 ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                } ${currentPage === link.id ? 'text-amber-600' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('booking')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-amber-600 text-white hover:bg-amber-700' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="flex flex-col py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-sm font-medium uppercase tracking-wider py-2 ${
                  currentPage === link.id ? 'text-amber-600' : 'text-gray-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium text-sm uppercase tracking-wide"
            >
              Book Appointment
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
