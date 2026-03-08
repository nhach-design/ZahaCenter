import { motion } from 'motion/react';
import { MessageCircle, Calendar, ArrowLeft, Send } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';
import { SITE_DATA } from '../data';

interface BookingProps {
  onBack: () => void;
}

export default function Booking({ onBack }: BookingProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    notes: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    const message = `New Booking Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nNotes: ${formData.notes}`;
    const whatsappUrl = `https://wa.me/${SITE_DATA.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen bg-stone-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-stone-900 p-8 text-white text-center">
            <h2 className="font-serif text-3xl font-bold mb-2">Book Your Appointment</h2>
            <p className="text-stone-300">Choose your preferred method to schedule your visit.</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <a 
                href={`https://wa.me/${SITE_DATA.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-green-50 border-2 border-green-100 rounded-xl hover:border-green-500 hover:bg-green-100 transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp Booking</h3>
                <p className="text-sm text-gray-500 text-center">Chat directly with us for quick scheduling</p>
              </a>

              <div className="flex flex-col items-center justify-center p-6 bg-amber-50 border-2 border-amber-100 rounded-xl">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                  <Calendar size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Online Form</h3>
                <p className="text-sm text-gray-500 text-center">Fill out the details below</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or fill out the form</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="06 00 00 00 00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select
                    name="service"
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    {SITE_DATA.services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                <textarea
                  name="notes"
                  id="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Any specific requests or questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Appointment</span>
                <Send size={18} />
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you will be redirected to WhatsApp to send your details directly to our reception.
              </p>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
