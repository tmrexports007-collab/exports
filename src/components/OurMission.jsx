import React from 'react';
import { motion } from 'framer-motion';
import { Check, Target, Zap, Shield, Globe } from 'lucide-react';

const OurMission = () => {
  const strengths = [
    {
      title: "Direct Sourcing",
      desc: "By removing intermediaries, we source directly from trusted mills to ensure fair pricing and peak freshness.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Modern Processing",
      desc: "State-of-the-art grading, polishing, and packaging technologies that preserve the grain's natural integrity.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Quality Assurance",
      desc: "A dedicated team of experts conducting multi-level checks on grain length, aroma, and purity.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "Professional Export",
      desc: "Seamless handling of international logistics, documentation, and compliance for a global market.",
      icon: <Globe className="w-5 h-5" />,
    },
  ];


  return (
    <div id='mission' className="bg-white min-h-screen scroll-mt-20 lg:scroll-mt-10 font-serif text-[#1A1A1A]">
      
      {/* --- VISION SECTION --- */}
      <section className="max-w-7xl mx-auto py-10 lg:py-20  px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.8 }}
           
          >
            <span className="text-[#C5A059] uppercase lg:tracking-[0.4em] text-xs lg:text-[10px] font-bold">The Future</span>
            <h2 className="text-2xl md:text-5xl font-light italic mt-4 mb-8 text-[#0A2540]">Our Vision</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sans font-light border-l-2 border-[#C5A059] pl-8">
              "To become a global leader in supplying high-quality Indian rice to households, 
              wholesalers, and food industries worldwide, bridging the gap between local 
              tradition and global demand."
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: false, amount: 0.2 }}
               transition={{ delay: 1, duration: 0.8 }}
             className="relative h-[400px] bg-gray-50 overflow-hidden group"
          >
            <img 
              src="https://i.pinimg.com/1200x/f0/00/7b/f0007b68cd8900299c6ef2d79abb950a.jpg" 
              alt="Quality Rice"
              className="w-full h-full object-cover rounded-xl transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* --- STRENGTHS SECTION --- */}
      <section className="bg-[#FCFAF5] py-10 lg:py-20 scroll-mt-20 lg:scroll-mt-10 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-5xl font-light italic text-[#0A2540]">Our Strengths</h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="text-[#C5A059] mb-6 inline-block pb-2 border-b border-transparent group-hover:border-[#C5A059] transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-[#0A2540] mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMMITMENT STRIP --- */}
      <section className="lg:py-20 py-10 text-center scroll-mt-20 lg:scroll-mt-10 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-3xl mx-auto border border-gray-100 p-4 rounded-2xl lg:p-12"
        >
          <h3 className="uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-6">Our Promise</h3>
          <p className="lg:text-xl text-base italic font-light text-gray-700">
            Consistently delivering the finest grains, ensuring every harvest meets the highest 
            standards of the Syed Dreamloom Creative Groups legacy.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default OurMission;
