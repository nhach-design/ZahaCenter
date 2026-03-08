import { motion } from 'motion/react';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';
import { SITE_DATA } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-500 text-sm font-bold uppercase tracking-widest">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">Excellence in <br />Beauty & Wellness</h2>
            <p className="text-stone-300 text-lg mb-6 leading-relaxed">
              {SITE_DATA.description}
            </p>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Located in the heart of Casablanca, ZAHA Centre is a women-owned sanctuary dedicated to providing top-tier slimming and anti-aging treatments. Our team of professionals is committed to delivering results that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white">Professional Team</h4>
                  <p className="text-stone-400 text-sm">Expertly trained staff</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white">Women-Owned</h4>
                  <p className="text-stone-400 text-sm">Empowering leadership</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white">Premium Products</h4>
                  <p className="text-stone-400 text-sm">High-quality care</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-white">Relaxing Environment</h4>
                  <p className="text-stone-400 text-sm">Peaceful atmosphere</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h3 className="font-serif text-2xl font-bold mb-6">Visit Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-600/20 rounded-lg text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Location</h4>
                  <p className="text-stone-300">{SITE_DATA.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-600/20 rounded-lg text-amber-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Hours</h4>
                  <p className="text-stone-300">{SITE_DATA.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-600/20 rounded-lg text-amber-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Contact</h4>
                  <p className="text-stone-300">{SITE_DATA.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.687679809987!2d-7.6325!3d33.5925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzMzLjAiTiA3wrAzNyc1Ny4wIlc!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma" 
                width="100%" 
                height="200" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen 
                loading="lazy"
                className="grayscale opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
