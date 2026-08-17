import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from './assets/SSV_LOGO-removebg-preview.png';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Enquiry } from './pages/Enquiry';
import { Gallery } from './pages/Gallery';
import { OurWorks } from './pages/OurWorks';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // time to reach 100%
    const intervalTime = 20; // update every 20ms
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setTimeout(onComplete, 200); // Wait 200ms at 100% before finishing
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          scale: { type: "spring", stiffness: 100 }
        }}
        className="flex flex-col items-center"
      >
        <img 
          src={logoImg} 
          alt="SSV Logo" 
          className="h-40 md:h-56 w-auto object-contain mb-8"
        />
      </motion.div>
      
      <motion.div 
        className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div 
          className="h-full bg-primary absolute top-0 left-0 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 font-bold tracking-widest text-sm flex gap-2 items-center"
      >
        <span className="uppercase text-gray-800">Loading</span> 
        <span className="text-primary w-8 text-left">{progress}%</span>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div className={`flex flex-col min-h-screen font-sans ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
            
            {/* Service sub-pages */}
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
