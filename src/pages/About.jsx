import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="w-full bg-white pb-20">
      {/* Page Header */}
      <div className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            About <span className="text-primary">SSV</span>
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for professional digital printing, customized products, and creative design solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1598425237731-8ae4d5884974?q=80&w=1000&auto=format&fit=crop" 
                alt="SSV Workspace" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-xl hidden md:block">
                <div className="bg-primary text-white p-6 rounded-lg text-center">
                  <h3 className="text-4xl font-black mb-1">10+</h3>
                  <p className="font-medium text-sm">Years of Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <h4 className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Who We Are</h4>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-secondary">
              Creative Ideas. Quality Prints. Trusted Service.
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              SSV provides professional digital printing, designing, photo framing and customized printing solutions for individuals, businesses, events and organizations.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We combine modern printing technology with creative expertise to deliver outstanding results. Whether you need a simple visiting card or a large customized event banner, our team is committed to bringing your vision to life.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "High-quality digital and vinyl printing",
                "Customized photo frames in all sizes",
                "Creative and professional graphic designs",
                "Fast turnaround and excellent customer support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-black transition-all">
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-red-50 text-primary flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Quality First</h3>
              <p className="text-gray-600">We never compromise on the materials we use or the precision of our printing process.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-red-50 text-primary flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously update our technology to provide you with the most modern printing solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-red-50 text-primary flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Customer Focus</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We work closely with you to ensure perfection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
