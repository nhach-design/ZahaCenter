import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { SITE_DATA } from '../data';

export default function Reviews() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mt-3">Client Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_DATA.reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 text-amber-100 fill-amber-100" size={48} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 relative z-10 italic">"{review.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-serif font-bold text-stone-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
