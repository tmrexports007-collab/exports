import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Marine = () => {
  const phoneNumber = "919666654679";

  const marineProducts = [
    {
      id: 1,
      name: "Vannamei Shrimps",
      desc: "Premium grade, farm-fresh shrimps processed under strict HACCP standards for global markets.",
      image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Black Tiger Prawns",
      desc: "Known for their bold, sweet flavor and firm texture. A luxury export favorite.",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Deep Sea Calamari",
      desc: "Tender and cleaned squid rings, frozen at peak freshness to preserve natural ocean flavors.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Cold Chain Fillets",
      desc: "Prime fish fillets processed in state-of-the-art facilities ensuring zero-temperature compromise.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div id="marine" className=" bg-[#F0F4F8] scroll-mt-20 lg:scroll-mt-10 font-serif text-[#1A1A1A]">

      {/* --- MARINE HERO --- */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&w=1200&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-blue-900/40" />

        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="uppercase tracking-[0.5em] text-xs mb-4 text-white"
          >
            Sustainable Oceans
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl font-light italic tracking-tight"
          >
            Bounties of the Deep
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-px bg-[#7BB9FA] mx-auto mt-8"
          />
        </div>
      </section>

      {/* --- MARINE GALLERY --- */}
      <section className="max-w-7xl mx-auto py-10 lg:py-20 px-4 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-blue-200 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className=" text-2xl lg:text-5xl font-light italic text-right lg:text-right text-[#0A2540]">Marine Exports</h2>
            <p className="text-blue-400 mt-2 font-sans text-sm lg:tracking-widest uppercase">Pristine Catch • Global Reach</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="lg:max-w-xs text-right lg:text-left text-gray-500  leading-relaxed font-sans mt-4 md:mt-0"
          >
            From the deep cold waters to your facility, our seafood preserves its nutritional profile through advanced IQF technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {marineProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-8 items-center group cursor-pointer"
            >
              <div className="w-full sm:w-48 h-64 overflow-hidden rounded-tr-[50px] rounded-bl-[50px] transition-all duration-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="flex-1">
                <h3 className=" text-xl lg:text-2xl font-light text-[#0A2540] mb-3">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                  {item.desc}
                </p>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    "Hi, I would like to know about your certifications."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#2C5282] font-bold group-hover:gap-5 transition-all"
                >
                  Certifications <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Marine;