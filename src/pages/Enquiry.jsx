import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Send, FileUp, CheckCircle, UploadCloud } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceOptions = [
  { value: 'flag-printing', label: 'Flag Printing' },
  { value: 'digital-frame-shop', label: 'Digital & Frame Shop' },
  { value: 'digital-banner', label: 'Digital Banner' },
  { value: 'vinyl-print', label: 'Vinyl Print' },
  { value: 'visiting-card', label: 'Visiting Card' },
  { value: 'photo-frame', label: 'Photo Frame' },
  { value: 'digital-art', label: 'Digital Art' },
  { value: 'mug-printing', label: 'Mug Printing' },
  { value: 'pillow-printing', label: 'Pillow Printing' },
  { value: 'customized-product', label: 'Other Customized Product' },
  { value: 'other', label: 'Other' }
];

export function Enquiry() {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    whatsapp: '',
    service: defaultService,
    quantity: '1',
    size: '',
    date: '',
    message: ''
  });
  
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="w-full bg-gray-50 min-h-screen py-32 flex flex-col items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 md:p-16 rounded-3xl shadow-xl max-w-2xl text-center"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">Enquiry Received!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Thank you! Your enquiry has been received. Our team will contact you shortly via WhatsApp or Phone to discuss your requirements and provide a quote.
          </p>
          <Link to="/" className="inline-block px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white pb-20">
      {/* Page Header */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598425237731-8ae4d5884974?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            Get a <span className="text-primary">Quote</span>
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to receive a custom quotation for your printing requirements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden -mt-16 relative z-20">
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-100 pb-2">Personal Details</h3>
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
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-bold text-secondary">Mobile Number *</label>
                    <input 
                      type="tel" 
                      id="mobile" 
                      name="mobile" 
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your mobile number"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="whatsapp" className="text-sm font-bold text-secondary">WhatsApp Number (if different)</label>
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      name="whatsapp" 
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your WhatsApp number"
                    />
                  </div>
                </div>
              </div>

              {/* Requirement Details */}
              <div>
                <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-100 pb-2">Requirement Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="service" className="text-sm font-bold text-secondary">Select Service *</label>
                    <select 
                      id="service" 
                      name="service" 
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                    >
                      <option value="" disabled>-- Please Select --</option>
                      {serviceOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-bold text-secondary">Quantity *</label>
                    <input 
                      type="number" 
                      id="quantity" 
                      name="quantity" 
                      min="1"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="size" className="text-sm font-bold text-secondary">Size / Dimensions (Optional)</label>
                    <input 
                      type="text" 
                      id="size" 
                      name="size" 
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="e.g. 8x4 ft, A4, 12x18 inch"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="date" className="text-sm font-bold text-secondary">Required By Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Upload Design */}
              <div>
                <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-100 pb-2">Design Files</h3>
                <div className="w-full">
                  <label 
                    htmlFor="file-upload" 
                    className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-primary transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud size={40} className="text-gray-400 mb-3" />
                      <p className="mb-2 text-sm text-gray-500 font-bold">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG, PDF or PSD (Max. 20MB)</p>
                      {file && <p className="mt-2 text-sm text-primary font-bold">Selected: {file.name}</p>}
                    </div>
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                </div>
              </div>
              
              {/* Additional Details */}
              <div>
                <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-100 pb-2">Additional Instructions</h3>
                <div className="space-y-2">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Any specific material, finishing or design requirements?"
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-12 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  SEND ENQUIRY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
