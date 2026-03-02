import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2 } from 'lucide-react';
import img1 from '../assets/certificate.png'
import img2 from '../assets/fssai.png'
import img3 from '../assets/apeda.png'
import img4 from '../assets/origin.png'

const Quality = () => {
  const certificates = [
  {
    name: "FSSAI",
    subtitle: "Food Safety Standards",
    logo: img2,
  },
  {
    name: "APEDA",
    subtitle: "Export Authority",
    logo: img3,
  },
  {
    name: "Phytosanitary",
    subtitle: "Plant Health",
    logo:img1
  },
  {
    name: "Origin",
    subtitle: "Authenticity",
    logo: img4,
  },
];

  return (
    <div id='quality' className="font-serif">
      
      {/* --- NEW MINIMALIST HEADER SECTION (WHITE) --- */}
      <section className="bg-white py-10 lg:py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-16 items-start">
            
            {/* Left: Big Statement */}
            <div className="lg:col-span-7">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                  viewport={{ once: false,  amount: 0.2}}
                 transition={{ duration: 1.5, delay: 0.2 }}
                className="text-[#C5A059] uppercase lg:tracking-[0.6em] text-xs lg:text-[10px] font-bold font-sans block mb-8"
              >
                The Gold Standard
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false,  amount: 0.2}}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="text-2xl md:text-5xl font-light italic text-[#0A2540] leading-[1.1]"
              >
                Purity Is Our <br className='hidden md:block' /> 
                <span className="text-[#C5A059]">Only</span> Metric.
              </motion.h2>
            </div>

            {/* Right: Detailed text & Image */}
            <div className="lg:col-span-5 pt-4">
              <div className="border-l border-gray-100 lg:pl-8 mb-12">
                <p className="text-gray-500 font-sans text-sm lg:leading-loose uppercase tracking-widest mb-8">
                  Beyond the harvest lies a commitment to perfection. We don't just export rice; we export a legacy of uncompromising quality control.
                </p>
                <ul className="space-y-4">
                  {['Multi-stage Sortex Cleaning', 'Laser-guided Grain Selection', 'Zero-moisture Packaging'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#0A2540] text-xs font-bold tracking-widest uppercase font-sans">
                      <CheckCircle2 size={16} className="text-[#C5A059]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false,  amount: 0.2}}
                  transition={{ duration: 1.5, delay: 0.2 }}
                className="aspect-video overflow-hidden bg-gray-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  alt="Quality Lab"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE BLUE SECTION (YOUR FAVORITE) --- */}
      <section className="bg-[#0A2540] py-10 lg:py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[20rem] font-bold text-white/[0.02] select-none translate-x-1/2 -translate-y-1/4">
          TMR
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <Award className="text-[#C5A059] w-12 h-12 mb-8" />
              <h2 className="text-4xl md:text-5xl font-light italic mb-8 leading-tight">
                Globally Compliant. <br />Locally Sourced.
              </h2>
              <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-md mb-12">
                We bridge the gap between Indian heritage and international safety standards. Every bag is accompanied by comprehensive documentation for seamless global entry.
              </p>
              
             <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-6 lg:pt-12">
  {certificates.map((cert, i) => (
    <div key={i} className="flex flex-col items-start gap-3">
      
      {/* Logo */}
      <img
        src={cert.logo}
        alt={cert.name}
        className="h-15 w-15  object-cover"
      />

      {/* Text */}
      <div>
        <h4 className="text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-1">
          {cert.name}
        </h4>
        <p className="text-gray-500 text-[10px] uppercase font-sans tracking-widest">
          {cert.subtitle}
        </p>
      </div>

    </div>
  ))}
</div>
            </div>

            <div className="relative">
              <div className="border border-[#C5A059]/30 p-4">
                <img 
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Quality Control" 
                  className="w-full grayscale brightness-75 border border-[#C5A059]/20"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#C5A059] p-10 hidden md:block shadow-2xl">
                 <p className="text-[#0A2540] text-xs font-bold uppercase tracking-[0.3em] leading-relaxed">
                   24-Point <br /> Quality <br /> Checks
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;