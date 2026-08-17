import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flag, Image as ImageIcon, Frame, Maximize, FileImage, CreditCard, Palette, Coffee, Square } from 'lucide-react';
import { motion } from 'framer-motion';
import flagImg1 from '../assets/flag/flag-1.jpg';

const servicesData = [
  {
    id: 'flag-printing',
    title: 'Flag Printing',
    desc: 'Custom flags for events, organizations, festivals and promotional activities.',
    icon: <Flag size={24} />,
    img: flagImg1,
  },
  {
    id: 'digital-frame-shop',
    title: 'Digital & Frame Shop',
    desc: 'High-quality digital printing for personal and business requirements.',
    icon: <ImageIcon size={24} />,
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&auto=format&fit=crop',
  },
  {
    id: 'photo-frame',
    title: 'Photo Frame',
    desc: 'Customized photo frames in multiple sizes and styles.',
    icon: <Frame size={24} />,
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=500&auto=format&fit=crop',
  },
  {
    id: 'digital-banner',
    title: 'Digital Banner',
    desc: 'Professional banners for shops, events, birthdays, weddings and promotions.',
    icon: <Maximize size={24} />,
    img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=500&auto=format&fit=crop',
  },
  {
    id: 'vinyl-print',
    title: 'Vinyl Print',
    desc: 'High-quality vinyl printing for branding and promotional needs.',
    icon: <FileImage size={24} />,
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop',
  },
  {
    id: 'visiting-card',
    title: 'Visiting Card',
    desc: 'Professional business and visiting card printing.',
    icon: <CreditCard size={24} />,
    img: 'https://images.unsplash.com/photo-1589041127168-9b1915731edc?w=500&auto=format&fit=crop',
  },
  {
    id: 'digital-art',
    title: 'Digital Art',
    desc: 'Creative digital artwork, posters and customized designs.',
    icon: <Palette size={24} />,
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop',
  },
  {
    id: 'mug-printing',
    title: 'Mug Printing',
    desc: 'Personalized photo and logo mug printing.',
    icon: <Coffee size={24} />,
    img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop',
  },
  {
    id: 'pillow-printing',
    title: 'Pillow Printing',
    desc: 'Customized photo and design pillow printing.',
    icon: <Square size={24} />,
    img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop',
  }
];

export function Services() {
  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional printing and creative solutions designed for your needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                  <Link 
                    to={`/services/${service.id}`} 
                    className="flex-1 text-center py-3 border-2 border-secondary text-secondary rounded-full font-bold hover:bg-secondary hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    to={`/enquiry?service=${service.id}`} 
                    className="flex-1 text-center py-3 bg-primary text-white rounded-full font-bold hover:bg-red-700 transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
