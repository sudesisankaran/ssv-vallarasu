import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What printing services do you provide?",
    answer: "We provide a comprehensive range of printing services including Digital Printing, Flag Printing, Digital Banners, Vinyl Printing, Visiting Cards, Photo Frames, Digital Art, Mug Printing, and Pillow Printing."
  },
  {
    question: "Do you accept custom designs?",
    answer: "Yes, absolutely! We specialize in custom designs. You can bring your own design, or our creative team can help design exactly what you need based on your requirements."
  },
  {
    question: "Can I send my design through WhatsApp?",
    answer: "Yes, you can easily send your designs and requirements through WhatsApp. Our team is highly responsive and will provide a quick quotation based on your shared files."
  },
  {
    question: "Do you provide photo framing?",
    answer: "Yes, we have a dedicated frame shop offering a wide variety of premium photo frames, including normal frames, collage frames, acrylic, canvas, LED frames, and customized family/couple frames."
  },
  {
    question: "Can I order customized mugs?",
    answer: "Yes, we offer personalized mug printing services for photos, logos, couples, birthdays, and corporate events. You can upload your photo or design during the enquiry process."
  },
  {
    question: "Can I order customized pillows?",
    answer: "Yes, we print high-quality customized photo pillows, couple pillows, birthday pillows, and text-based pillows perfect for gifting."
  },
  {
    question: "How can I get a quotation?",
    answer: "You can get a quotation by filling out the 'Get a Quote' form on our website, clicking the floating WhatsApp button, or directly calling our support number with your requirements."
  },
  {
    question: "How long does printing take?",
    answer: "Production time depends on the product, quantity, and design requirements. We strive to process and complete all orders as fast as possible without compromising on quality."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-gray-50 pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our printing services, processes, and products.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-100 last:border-b-0 transition-colors ${openIndex === index ? 'bg-red-50/30' : 'hover:bg-gray-50'}`}
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-primary' : 'text-secondary'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {/* Still have questions? */}
          <div className="mt-16 bg-primary text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 text-white/10">
              <HelpCircle size={200} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-4">Still have questions?</h2>
              <p className="text-red-100 mb-8 max-w-xl mx-auto">
                Can't find the answer you're looking for? Our team is always ready to help you with your specific requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                  Contact Us
                </Link>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
