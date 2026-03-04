import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import basmathi from "../assets/basmathi.jpg"
import ponni from "../assets/ponni.jpg"
import nonbasmathi from "../assets/nonbasmathi.jpg"
import sonamasuri from "../assets/sonamasuri.jpg"
import brownrice from "../assets/brownrice.webp"
import ir64 from "../assets/ir64.jpg"

import { useInView } from "framer-motion"; 
import { useRef } from "react"; 
import { FaWhatsapp } from "react-icons/fa"; 
import { MessageSquare } from "lucide-react"; 

const Counter = ({ value }) => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
     
      animate(count, parseInt(value), { duration: 2, ease: "circOut" });
    } else {
      
      count.set(0);
    }
  }, [isInView, value, count]);

  return (
    <motion.span
      ref={ref} 
      style={{ display: "inline-block", minWidth: "2ch" }}
    >
      {rounded}
    </motion.span>
  );
};
const Products = () => {

   const phoneNumber = "919666654679";



  const riceVarieties = [
    {
      id: 1,
      name: "Sona Masuri",
      desc: "Lightweight, aromatic, and low in starch. The gold standard for daily healthy consumption.",
      image: sonamasuri,
    },
    {
      id: 2,
      name: "Basmati Rice",
      desc: "Long-grain, aged to perfection with a premium nutty aroma. Ideal for festive feasts.",
      image: basmathi,
    },
    {
      id: 3,
      name: "Ponni Rice",
      desc: "A staple in South Indian households. Known for its distinct texture and high nutrition.",
      image: ponni,
    },
    {
      id: 4,
      name: "Non-Basmati",
      desc: "High-yield, affordable bulk varieties optimized for the international export markets.",
      image: nonbasmathi,
    },
    {
  id: 5,
  name: "IR64 Parboiled Rice (5% Broken rice)",
  desc: "Widely exported parboiled rice known for its uniform grains, long shelf life, and excellent cooking stability, ideal for bulk supply and global markets.",
  image: ir64,
},
{
  id: 6,
  name: "Brown Rice",
  desc: "Nutrient-rich whole grain rice with natural bran layers intact, offering a healthy option with a slightly nutty flavor and firm texture.",
  image:brownrice  ,
}
  ];

  const stats = [
    { label: "Years of Legacy", val: "112", suffix: "+" },
    { label: "Global Nations", val: "19", suffix: "+" },
    { label: "Quality Awards", val: "99", suffix: "+" },
    { label: "Major Markets", val: "ASIA , AFRICA , UAE , UK , EU & USA", isText: true },
  ];

  return (
 

   
    <div id="product" className=" bg-[#FCFAF5] scroll-mt-30 lg:scroll-mt-10 font-serif text-[#1A1A1A] overflow-hidden">
      

       <motion.a
        href={`https://wa.me/${phoneNumber}?text=Hi! I am interested in your products.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer"
      >
        <FaWhatsapp size={30} />
      </motion.a>
      {/* --- ELEGANT HERO --- */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
           viewport={{ once: false,  amount: 0.2}}
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
          src="https://i.pinimg.com/1200x/fe/8f/93/fe8f93d900be9068f862f1745e9aa18f.jpg"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
             viewport={{ once: false }}
            className="uppercase tracking-[0.5em] text-xs mb-4 text-[#C5A059]"
             
          >
            Since 1912
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
             viewport={{ once: false, amount: 0.2 }}
            className="text-5xl md:text-7xl font-light italic tracking-tight"
          >
            The Soul of Our Grains
          </motion.h1>
          <motion.div 
             initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
             transition={{ delay: 1.2, duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
             className="h-[1px] bg-[#C5A059] mx-auto mt-8"
          />
        </div>
      </section>

      {/* --- MINIMALIST STATS --- */}
      <section className="bg-white py-10 lg:py-16 border-b border-gray-100">
  <div className="max-w-7xl px-4 mx-auto  grid grid-cols-1 md:grid-cols-5 items-end gap-12">
    {stats.map((stat, i) => (
      <div
        key={i}
        className={`text-center group ${i === stats.length - 1 ? "col-span-1 md:col-span-2" : ""}`}
      >
        <h4 className="text-[#C5A059] text-3xl font-light mb-1">
          {stat.isText ? stat.val : (
            <>
              <Counter value={stat.val} />
              {stat.suffix}
            </>
          )}
        </h4>

        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-gray-600 transition-colors">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* --- PRODUCT GALLERY --- */}
      <section className="max-w-7xl mx-auto py-10 lg:py-20 px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <div>
            <h2 className=" text-2xl lg:text-5xl font-light italic text-[#0A2540]">Our Varieties</h2>
            <p className="text-gray-400 mt-2 font-sans text-sm lg:tracking-widest uppercase">Select Export Quality</p>
          </div>
          <p className="lg:max-w-xs text-gray-500 text-right lg:text-left leading-relaxed font-sans mt-4 md:mt-0">
            Sourced from the most fertile regions, our rice undergoes 24 rigorous quality checks before reaching your table.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {riceVarieties.map((rice, index) => (
            <motion.div
              key={rice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col  sm:flex-row gap-8 items-center group cursor-pointer"
            >
              
               <div className="w-full sm:w-48 h-64 overflow-hidden rounded-tr-[50px] rounded-bl-[50px] transition-all duration-700">
                <img 
                  src={rice.image} 
                  alt={rice.name} 
                  className="w-full h-full  object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>

              <div className="flex-1">
               
                <h3 className="text-xl lg:text-2xl font-light text-[#0A2540] mb-3">{rice.name}</h3>
                
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                  {rice.desc}
                </p>
             
<div className="flex items-center gap-6 mt-8">

  {/* Details Button */}
  <a
    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hi, I would like more details about ${rice.name}.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold hover:gap-5 transition-all"
  >
    Details <ArrowRight className="w-3 h-3" />
  </a>

  {/* Get Quote Button */}
  <a
    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hi, I would like to get a quote for ${rice.name}.`
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-[#0A2540] text-white px-3 py-2 md:px-5 md:py-2.5 text-[10px] uppercase tracking-[0.1em] font-bold rounded-lg hover:bg-[#C5A059] transition-all duration-300 shadow-sm"
  >
    <MessageSquare className="w-3 h-3" />
    Get Quote
  </a>

</div>
</div>
            </motion.div>
          ))}
        </div>
      </section>

  

    </div>
    
  );
};

export default Products;
