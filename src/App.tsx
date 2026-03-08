import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { SITE_DATA } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (page: string) => {
    if (page === 'booking') {
      setCurrentView('booking');
      window.scrollTo(0, 0);
    } else {
      setCurrentView('home');
      // If we are already on home, just scroll
      setTimeout(() => {
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (page === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      {currentView === 'home' ? (
        <>
          <Navbar currentPage="home" onNavigate={handleNavigate} />
          <div id="home">
            <Hero onBookClick={() => handleNavigate('booking')} />
          </div>
          <Services />
          <Gallery />
          <About />
          <Reviews />
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <a 
            href={`https://wa.me/${SITE_DATA.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={28} />
          </a>
        </>
      ) : (
        <Booking onBack={() => handleNavigate('home')} />
      )}
    </div>
  );
}
