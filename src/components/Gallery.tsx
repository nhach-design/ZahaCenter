import { motion } from 'motion/react';
import { SITE_DATA } from '../data';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Atmosphere</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3">Our Sanctuary</h2>
          </div>
          <p className="text-gray-600 max-w-md text-right md:text-left">
            Step into a world of tranquility and elegance. Our center is designed to provide a relaxing escape from the city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {SITE_DATA.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
