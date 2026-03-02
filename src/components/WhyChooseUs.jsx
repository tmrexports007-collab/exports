import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Truck, MapPin, FileText, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: "Consistent Quality",
      desc: "Rigorous testing for grain length and aroma in every batch.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Modern Processing",
      desc: "State-of-the-art milling preserves nutritional value and purity.",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "On-time Delivery",
      desc: "Optimized logistics ensuring reliable global shipping schedules.",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: "Farmer Network",
      desc: "Sourced directly from fertile Nellore belts for fresh harvests.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Export Compliance",
      desc: "Expert handling of documentation for seamless customs clearance.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Direct Sourcing",
      desc: "Removing intermediaries to ensure fair pricing and freshness.",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  const duplicatedAdvantages = [...advantages, ...advantages];

  return (
    <div id='why-choose-us' className="bg-white py-10 lg:py-20 font-serif text-[#1A1A1A] overflow-hidden">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false,amount:0.2 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold">The TMR Standard</span>
            <h2 className="text-2xl md:text-5xl font-light italic mt-4 text-[#0A2540]">Why Choose TMR Agro?</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false,amount:0.2}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-gray-500 font-sans font-light leading-relaxed border-l border-gray-200 pl-6"
          >
            Bridging the gap between local tradition and global demand through 
            modern processing and transparent sourcing.
          </motion.p>
        </div>
      </section>

      {/* Marquee Section*/}
      <div className="relative flex items-center">
       
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-white to-transparent hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-white to-transparent hidden md:block" />

        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1920], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, 
              ease: "linear",
            },
          }}
        >
          {duplicatedAdvantages.map((item, index) => (
            <div
              key={index}
              className="group w-[350px] shrink-0 bg-[#FCFAF5] p-10 border border-transparent hover:border-[#C5A059]/30 transition-all duration-500"
            >
              <div className="text-[#C5A059] mb-8 inline-block pb-2 border-b border-transparent group-hover:border-[#C5A059] transition-all duration-500">
                {item.icon}
              </div>
              <h3 className=" text-base   lg:text-xl font-medium text-[#0A2540] mb-4 uppercase tracking-wider">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom */}
      <section className="mt-24 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-8" />
          <p className="text-lg italic font-light text-gray-400 font-serif">
            "Ensuring every harvest meets the highest standards of the TMR legacy."
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;