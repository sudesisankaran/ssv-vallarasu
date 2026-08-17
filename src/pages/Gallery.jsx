import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import flagImg1 from '../assets/flag/flag-1.jpg';
import flagImg2 from '../assets/flag/flag-2.jpg';
import flagImg3 from '../assets/flag/flag-3.jpg';

// Mock gallery data
const galleryItems = [
  { id: 1, title: 'Corporate Event Banner', category: 'Banners', img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&auto=format&fit=crop' },
  { id: 2, title: 'Festival Celebration Flag', category: 'Flags', img: flagImg1 },
  { id: 3, title: 'Premium Wooden Frame', category: 'Photo Frames', img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=800&auto=format&fit=crop' },
  { id: 4, title: 'Matte Finish Business Card', category: 'Visiting Cards', img: 'https://images.unsplash.com/photo-1589041127168-9b1915731edc?w=800&auto=format&fit=crop' },
  { id: 5, title: 'Creative Vector Art', category: 'Digital Art', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop' },
  { id: 6, title: 'Customized Logo Mug', category: 'Mug Printing', img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop' },
  { id: 7, title: 'Photo Printed Pillow', category: 'Pillow Printing', img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&auto=format&fit=crop' },
  { id: 8, title: 'Company Promotional Flag', category: 'Flags', img: flagImg2 },
  { id: 9, title: 'Family Collage Frame', category: 'Photo Frames', img: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&auto=format&fit=crop' },
  { id: 10, title: 'Sports Team Flag', category: 'Flags', img: flagImg3 }
];

const categories = ['All', 'Banners', 'Flags', 'Photo Frames', 'Visiting Cards', 'Digital Art', 'Mug Printing', 'Pillow Printing', 'Customized Products'];

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="w-full bg-white pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            Our <span className="text-primary">Gallery</span>
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse through our extensive portfolio of high-quality prints and custom designs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
                onClick={() => setLightboxImg(item.img)}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider mb-1">{item.category}</span>
                  <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <Search size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No items found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImg} 
              alt="Gallery Preview" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
