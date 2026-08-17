import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Clock, HeartHandshake, ShieldCheck, Printer } from 'lucide-react';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598425237731-8ae4d5884974?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="container mx-auto px-4 z-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Your One-Stop <br className="hidden md:block" />
              <span className="text-primary">Digital Printing</span> & <br className="hidden md:block" />
              Flag Printing
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
              Quality Printing. Creative Designs. Customized Products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/enquiry" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-primary/30 w-full sm:w-auto">
                Get a Quote
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10 text-sm md:text-base font-medium text-gray-300">
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> Quality Printing</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> Creative Designs</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> Fast Service</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> Custom Solutions</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1000&auto=format&fit=crop" 
                alt="SSV Printing Studio" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">About SSV</h4>
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-secondary">
                Creative Ideas. Quality Prints. Trusted Service.
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                SSV provides professional digital printing, designing, photo framing and customized printing solutions for individuals, businesses, events and organizations.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-primary"><Star size={20} /></div>
                  <span className="font-semibold text-secondary">Quality Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-primary"><Printer size={20} /></div>
                  <span className="font-semibold text-secondary">Modern Printing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-primary"><HeartHandshake size={20} /></div>
                  <span className="font-semibold text-secondary">Customer Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-primary"><Clock size={20} /></div>
                  <span className="font-semibold text-secondary">Fast Service</span>
                </div>
              </div>
              
              <Link to="/about" className="inline-flex items-center gap-2 font-bold text-primary hover:text-red-700 transition-colors group">
                Learn More 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Top Rated</h4>
            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">Featured Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Digital Banner", img: "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=500&auto=format&fit=crop", desc: "Professional banners for all occasions." },
              { title: "Photo Frame", img: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=500&auto=format&fit=crop", desc: "Customized frames in multiple sizes." },
              { title: "Visiting Card", img: "https://images.unsplash.com/photo-1589041127168-9b1915731edc?w=500&auto=format&fit=crop", desc: "Premium quality business cards." },
              { title: "Customized Mug", img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format&fit=crop", desc: "Personalized photo & logo mugs." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2 uppercase">{item.title}</h3>
                  <p className="text-gray-500 mb-4 text-sm">{item.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-primary text-sm">Get a Quote</span>
                    <Link to="/enquiry" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Process</h4>
            <h2 className="text-3xl md:text-5xl font-black mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-700 z-0"></div>
            
            {[
              { num: "01", title: "Choose Your Service" },
              { num: "02", title: "Share Your Requirement" },
              { num: "03", title: "Get Your Quote" },
              { num: "04", title: "We Print & Create" },
              { num: "05", title: "Collect / Delivery" }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-secondary border-2 border-primary text-primary flex items-center justify-center text-2xl font-black mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg leading-tight">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Benefits</h4>
            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">Why Choose SSV</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Star />, title: "Quality", desc: "High-quality printing and finishing using premium materials." },
              { icon: <Printer />, title: "Creativity", desc: "Professional and attractive designs tailored for you." },
              { icon: <CheckCircle />, title: "Customization", desc: "Products designed exactly according to customer requirements." },
              { icon: <Clock />, title: "Fast Service", desc: "Efficient order processing and timely delivery." },
              { icon: <ShieldCheck />, title: "Affordable", desc: "Competitive pricing without compromising on quality." },
              { icon: <HeartHandshake />, title: "Customer Support", desc: "Easy communication through WhatsApp and phone." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-red-500/5 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-white shadow-md text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
