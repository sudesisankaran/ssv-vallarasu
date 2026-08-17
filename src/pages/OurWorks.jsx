import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import flagImg1 from '../assets/flag/flag-1.jpg';
import flagImg2 from '../assets/flag/flag-2.jpg';
import flagImg3 from '../assets/flag/flag-3.jpg';

const worksData = [
  {
    id: 1,
    title: 'City Marathon Branding',
    category: 'Event Banner Design',
    desc: 'Complete branding including start/finish line banners, route flags, and volunteer badges.',
    img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Tech Startup Identity',
    category: 'Business Card Design',
    desc: 'Premium matte finish business cards with spot UV gloss for a modern tech company.',
    img: 'https://images.unsplash.com/photo-1589041127168-9b1915731edc?w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Heritage Exhibition',
    category: 'Custom Photo Frame',
    desc: 'Custom-sized antique style wooden frames for a local heritage photography exhibition.',
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'National Day Celebration',
    category: 'Festival Flag Printing',
    desc: 'Bulk order of 500+ high-quality fabric flags for city-wide celebrations.',
    img: flagImg1
  },
  {
    id: 5,
    title: 'Corporate Gifting Set',
    category: 'Customized Mugs',
    desc: 'Personalized premium ceramic mugs with employee names and company logo.',
    img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Boutique Storefront',
    category: 'Vinyl Printing',
    desc: 'Full glass facade vinyl wrapping with custom die-cut logos and operating hours.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Company Identity Flags',
    category: 'Corporate Flags',
    desc: 'Premium double-sided flags with custom corporate logos for headquarters.',
    img: flagImg2
  },
  {
    id: 8,
    title: 'Sports Team Championship',
    category: 'Sports Flags',
    desc: 'Large custom flags used by fans during the championship finale.',
    img: flagImg3
  }
];

export function OurWorks() {
  return (
    <div className="w-full bg-gray-50 pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            Made With <span className="text-primary">Creativity</span> & Precision
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a look at some of the completed projects we are most proud of.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {worksData.map((work, index) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index % 2 === 0 ? 0 : 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
            >
              <div className="h-[300px] md:h-[400px] overflow-hidden relative">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                  {work.category}
                </div>
              </div>
              <div className="p-8 md:p-10 relative">
                {/* Floating button */}
                <button className="absolute -top-8 right-8 w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:-translate-y-1 transition-all duration-300 group-hover:bg-primary z-10">
                  <ExternalLink size={24} />
                </button>
                
                <h3 className="text-2xl font-black text-secondary mb-4 pr-16">{work.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {work.desc}
                </p>
                
                <div className="flex items-center gap-1 text-yellow-500 pt-6 border-t border-gray-100">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <span className="text-gray-500 text-sm font-medium ml-2 text-primary">Highly Rated Project</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
