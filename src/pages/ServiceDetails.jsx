import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import flagImg2 from '../assets/flag/flag-2.jpg';

// Mock data for services details
const serviceDetailsData = {
  'flag-printing': {
    title: 'Custom Flag Printing',
    description: 'High-quality custom flags for events, organizations, festivals, and promotional activities. We offer durable materials with vibrant colors that withstand outdoor elements.',
    features: ['Event Flags', 'Company Flags', 'Political Flags', 'Sports Team Flags', 'Festival Flags', 'Feather & Teardrop Flags'],
    img: flagImg2,
    price: 'Starting from $15.00'
  },
  'digital-frame-shop': {
    title: 'Digital & Frame Shop',
    description: 'High-quality digital printing for personal and business requirements. From brochures to flyers and posters, we deliver crisp and vivid prints.',
    features: ['Brochures & Flyers', 'Posters', 'Certificates', 'Booklets', 'Letterheads', 'Menus'],
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1000&auto=format&fit=crop',
    price: 'Get a Quote'
  },
  'digital-banner': {
    title: 'Professional Digital Banner Printing',
    description: 'Professional banners for shops, events, birthdays, weddings and promotions. Available in various sizes and finishes.',
    features: ['Shop Banners', 'Event Banners', 'Birthday Banners', 'Wedding Banners', 'Political/Event Banners', 'Promotional Banners', 'Festival Banners'],
    img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=1000&auto=format&fit=crop',
    price: 'Starting from $25.00'
  },
  'vinyl-print': {
    title: 'Vinyl Print',
    description: 'Durable and weather-resistant vinyl printing for branding and promotional needs. Perfect for indoor and outdoor applications.',
    features: ['Promotional Vinyl', 'Shop Branding', 'Wall Graphics', 'Vehicle Graphics', 'Sticker Printing', 'Custom Vinyl Designs'],
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&auto=format&fit=crop',
    price: 'Starting from $45.00'
  },
  'visiting-card': {
    title: 'Professional Visiting Card Printing',
    description: 'Make a lasting first impression with our premium quality business and visiting cards.',
    features: ['Standard', 'Premium', 'Matte', 'Glossy', 'Laminated', 'Single Side', 'Double Side'],
    img: 'https://images.unsplash.com/photo-1589041127168-9b1915731edc?w=1000&auto=format&fit=crop',
    price: 'Starting from $10.00 / 100 pcs'
  },
  'photo-frame': {
    title: 'Premium Photo Framing',
    description: 'Customized photo frames in multiple sizes and styles to preserve your precious memories beautifully.',
    features: ['Normal Frame', 'Premium Frame', 'Collage Frame', 'Acrylic Frame', 'Canvas Frame', 'LED Frame', 'Family Frame', 'Couple Frame'],
    img: 'https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=1000&auto=format&fit=crop',
    price: 'Starting from $20.00'
  },
  'digital-art': {
    title: 'Creative Digital Art & Design',
    description: 'Creative digital artwork, posters and customized designs tailored to your specific requirements by our expert design team.',
    features: ['Poster Design', 'Banner Design', 'Invitation Design', 'Social Media Designs', 'Business Designs', 'Custom Digital Art', 'Photo Editing', 'Creative Artwork'],
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1000&auto=format&fit=crop',
    price: 'Get a Quote'
  },
  'mug-printing': {
    title: 'Personalized Mug Printing',
    description: 'High-quality personalized photo and logo mug printing. The perfect customized gift for any occasion.',
    features: ['Photo Mug', 'Couple Mug', 'Birthday Mug', 'Corporate Mug', 'Logo Mug', 'Customized Mug'],
    img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=1000&auto=format&fit=crop',
    price: 'Starting from $12.00'
  },
  'pillow-printing': {
    title: 'Customized Pillow Printing',
    description: 'Soft, high-quality customized photo and design pillow printing. Add a personal touch to your home decor or create a memorable gift.',
    features: ['Photo Pillow', 'Couple Pillow', 'Birthday Pillow', 'Family Pillow', 'Customized Text Pillow', 'Gift Pillow'],
    img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=1000&auto=format&fit=crop',
    price: 'Starting from $18.00'
  }
};

export function ServiceDetails() {
  const { id } = useParams();
  const service = serviceDetailsData[id];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-secondary mb-4">Service Not Found</h1>
        <p className="text-gray-500 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-red-700 transition-colors">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white pb-20">
      {/* Page Header */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
          style={{ backgroundImage: `url(${service.img})` }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Back to Services
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          >
            {service.title}
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full rounded-2xl shadow-xl mb-10 object-cover max-h-[500px]"
              />
              <h2 className="text-3xl font-black mb-6 text-secondary">Service Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.description}
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-secondary">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <CheckCircle className="text-primary shrink-0" size={20} />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-28">
              <h3 className="text-2xl font-black text-secondary mb-6 border-b border-gray-200 pb-4">Service Details</h3>
              
              <div className="mb-8">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Pricing</p>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </div>
              
              <div className="space-y-4">
                <Link 
                  to={`/enquiry?service=${id}`} 
                  className="w-full py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-primary/30 flex items-center justify-center"
                >
                  Get a Quote
                </Link>
                <a 
                  href={`https://wa.me/1234567890?text=Hi%20SSV,%20I%20am%20interested%20in%20${service.title}.%20Please%20share%20the%20details%20and%20pricing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white border-2 border-green-500 text-green-600 rounded-full font-bold text-lg hover:bg-green-50 transition-all flex items-center justify-center gap-2"
                >
                  WhatsApp Us
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 flex items-start gap-2">
                  <ImageIcon size={16} className="shrink-0 mt-0.5" />
                  <span>Have a custom design? You can upload your design files directly on the enquiry page.</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
