import { 
  Sparkles, 
  Activity, 
  Smile, 
  Scissors, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Star,
  MessageCircle
} from 'lucide-react';

export const SITE_DATA = {
  name: "ZAHA Centre",
  fullName: "ZAHA Centre minceur et anti-âge Casablanca",
  tagline: "Amincissement - Soins de visage - Soins anti-âge corps et visage",
  address: "141 Bd Moulay Youssef, Casablanca 20200",
  phone: "06 64 97 40 60",
  whatsapp: "212664974060", // Formatted for API
  rating: 5.0,
  reviewCount: 39,
  hours: "Open · Closes 8 PM",
  description: "ZAHA Centre is the perfect mix of professionalism and care. We specialize in slimming, facial care, and anti-aging treatments for both body and face.",
  services: [
    {
      id: 'slimming',
      title: 'Amincissement',
      description: 'Advanced weight loss and body contouring solutions tailored to your needs.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'facial',
      title: 'Soins de Visage',
      description: 'Rejuvenating facial treatments to restore your skin\'s natural glow.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'anti-aging',
      title: 'Anti-âge Corps & Visage',
      description: 'Premium anti-aging therapies to help you look and feel younger.',
      icon: Smile,
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'beauty',
      title: 'Beauty & Care',
      description: 'Manicure, pedicure, and other beauty services for a complete pampering experience.',
      icon: Scissors,
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800'
    }
  ],
  reviews: [
    {
      name: "Ghita Kharbouch",
      rating: 5,
      text: "ZAHA Centre is the perfect mix of professionalism and care. Every session feels like a treat for both body and mind. The team is fantastic, and the treatments truly make a difference. I highly recommend 👌🏻",
      date: "8 months ago"
    },
    {
      name: "Shammas Aziz",
      rating: 5,
      text: "Spectacular, I had mani/pedi one of the best ones I have been to 👍💯👌",
      date: "a year ago"
    },
    {
      name: "Rajaa Saadi",
      rating: 5,
      text: "Warm welcome + top-notch service + very professional and friendly staff + treatments with satisfying results from the very first visit. I highly recommend this center.",
      date: "10 months ago"
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
  ]
};
