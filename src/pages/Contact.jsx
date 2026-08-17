import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white pb-20">
      {/* Page Header */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Let's create something amazing together. Reach out for queries, quotes, and support.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h4 className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Get In Touch</h4>
            <h2 className="text-3xl font-black mb-8 text-secondary">
              We're Here to Help
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-2">Mon-Sat from 9am to 6pm.</p>
                  <a href="tel:+12345678900" className="font-bold text-primary hover:underline">+1 234 567 8900</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-lg mb-1">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">Fastest way to get a quote.</p>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="font-bold text-green-600 hover:underline">+1 234 567 8900</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-2">We'll respond within 24 hours.</p>
                  <a href="mailto:info@ssvstudio.com" className="font-bold text-primary hover:underline">info@ssvstudio.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Drop by our studio.</p>
                  <p className="font-medium text-gray-800">123 Printing Street, Creative District, City Name, 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-black mb-6 text-secondary">Send a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you shortly.
              </p>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 text-green-700 p-6 rounded-2xl text-center flex flex-col items-center border border-green-100"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-secondary">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-secondary">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-secondary">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-secondary">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-secondary">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Please describe your requirements in detail..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Maps Placeholder */}
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
            <MapPin size={48} className="mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">Google Maps Embed</h3>
            <p>A responsive map iframe will be placed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
