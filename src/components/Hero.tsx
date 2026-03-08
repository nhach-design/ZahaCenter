import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { SITE_DATA } from '../data';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2070" 
          alt="Spa Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-white"
          >


            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Reveal Your <br />
              <span className="text-amber-400 italic">Inner Radiance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed max-w-lg">
              {SITE_DATA.tagline}. Experience the perfect mix of professionalism and care at ZAHA Centre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookClick}
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium transition-all"
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
