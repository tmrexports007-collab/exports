import React from 'react';
import { motion } from 'framer-motion';
import { GiPlantSeed, GiGlobe } from 'react-icons/gi';
import about from "../assets/about.jpg"
import rice from "../assets/rice.jpg"
import marine from "../assets/marine.jpg"
const About = () => {
const phoneNumber = "919666654679";
  return (

   <section id="about" className="py-10 lg:py-24 scroll-mt-20 lg:scroll-mt-10 overflow-hidden transition-colors duration-1000"
 
 >
  
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
           
            transition={{ duration: 0.8,delay:0.2, ease: "easeInOut" }}
            viewport={{ once: false,amount:0.2 }}
             
            className="flex flex-col items-center  lg:items-start lg:text-left space-y-6"
          >
            <h3 className='font-extrabold text-[#004d2c]  text-2xl md:text-5xl'>About Us</h3>
   
            <h2 className="text-lg lg:text-3xl font-bold text-[#004d2c] leading-tight">
              Pure Grains, Global Trust
            </h2>

          
            <p className="text-gray-500  leading-relaxed max-w-2xl">
  TMR Agro & Marine Exports is a growing rice export company committed to delivering premium-quality Indian rice to international markets. 
  Located in Nellore, one of India’s top rice belts, we work directly with farmers and mills to ensure purity, freshness, and consistent quality. 
  <span className="block mt-2">
    Building on this trust, our marine division now exports premium seafood products, 
    maintaining the same rigorous standards from the ocean to the global market.
  </span>
</p>

            {/* Feature List  */}
            <div className="space-y-8 w-full  pt-4">
           
              <div className="flex flex-col items-center lg:flex-row lg:items-center gap-5">
                <div className="bg-[#468e3d] p-4 rounded-full text-white shadow-lg text-3xl">
                  <GiPlantSeed /> 
                </div>
                <div>
                  <h4 className="text-[#004d2c] font-normal text-lg lg:text-2xl leading-none">Superior Export Quality</h4>
                
                </div>
              </div>

              <div className="flex flex-col items-center w-full lg:flex-row lg:items-center gap-5">
                <div className="bg-[#468e3d] p-4 rounded-full text-white shadow-lg text-3xl">
                  <GiGlobe />
                </div>
                <div>
                  <h4 className="text-[#004d2c] font-normal text-lg lg:text-2xl leading-none">Global Representation</h4>
                 
                </div>
              </div>
            </div>

          
          <div className="lg:pt-8 pt-4">
  <a
    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      "Hi, I would like to know more about your products and export services."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#004d2c] text-white text-sm lg:text-base rounded-md px-12 py-4 font-bold uppercase tracking-widest transition-colors duration-300"
  >
    Know More
  </a>
</div>
          </motion.div>


          {/* Right Side */}
         
          <div className="hidden lg:flex justify-center items-center h-125 lg:h-150 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once:false,amount:0.2 }}
                 transition={{ duration: 0.8, delay:1.2,ease: "easeInOut" }}
              className="relative w-full h-full p-6 flex justify-center items-center"
            >
              <div 
                className="w-[90%] h-[90%] border-4 border-[#468e3d] overflow-hidden"
                style={{ borderRadius: "0% 100% 0% 100% / 0% 100% 0% 100%" }}
              >
                <img 
                  src={about} 
                  alt="Rice Field" 
                  className="w-full h-full object-cover shadow-inner"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                
              }}
              className="absolute right-4 bottom-18 w-64 h-64 border-6 border-gray-200 overflow-hidden shadow-2xl z-20"
              style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
            >
              <img src={rice} alt="Rice Bowl" className="w-full h-full object-cover" />
            </motion.div>


<motion.div 
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    animate={{ y: [0, 20, 0] }}
    transition={{ 
      y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      x: { duration: 0.8, delay: 1 }
    }}
    
    className="absolute right-0 top-5 w-54 h-54 border-4 border-white overflow-hidden shadow-2xl z-0"
    style={{ borderRadius: "90% 20% 60% 70% / 60% 30% 70% 40% " }}
  >
    <img src={marine} alt="Marine Export Ship" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-blue-900/10"></div>
  </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;








