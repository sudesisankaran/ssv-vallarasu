import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Share2, Globe } from 'lucide-react';
import logoImg from '../../assets/SSV_LOGO-removebg-preview.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <div className="mb-4 bg-white inline-block p-1 rounded-md">
              <img 
                src={logoImg} 
                alt="SSV Logo" 
                className="h-12 w-auto object-contain rounded-sm"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional Digital Printing, Photo Frame, Design & Customized Printing Studio.
              Creative Ideas. Quality Prints. Trusted Service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services/digital-frame-shop" className="text-gray-400 hover:text-white transition-colors">Digital & Frame Shop</Link></li>
              <li><Link to="/services/digital-banner" className="text-gray-400 hover:text-white transition-colors">Banner Printing</Link></li>
              <li><Link to="/services/flag-printing" className="text-gray-400 hover:text-white transition-colors">Flag Printing</Link></li>
              <li><Link to="/services/photo-frame" className="text-gray-400 hover:text-white transition-colors">Photo Frames</Link></li>
              <li><Link to="/services/visiting-card" className="text-gray-400 hover:text-white transition-colors">Visiting Cards</Link></li>
              <li><Link to="/services/mug-printing" className="text-gray-400 hover:text-white transition-colors">Mug Printing</Link></li>
              <li><Link to="/services/pillow-printing" className="text-gray-400 hover:text-white transition-colors">Pillow Printing</Link></li>
              <li><Link to="/services/digital-art" className="text-gray-400 hover:text-white transition-colors">Digital Art</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-gray-400">123 Printing Street, Creative District, City Name, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-gray-400">+91 93608 01346</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-green-500 shrink-0" size={20} />
                <span className="text-gray-400">+91 93608 01346</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-gray-400">info@ssvstudio.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} SSV. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
