import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFileDownload, FaChevronRight, FaCheck, FaSpinner } from 'react-icons/fa';

import video from '../assets/video (2).mp4';
import thumbnail from '../assets/thumbnail.webp'

const Home = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [downloadState, setDownloadState] = useState('idle'); // 'idle' | 'downloading' | 'done'

  const handleDownload = () => {
    if (downloadState !== 'idle') return;

    setDownloadState('downloading');

    // Simulate download initiation delay
    setTimeout(() => {
      setDownloadState('done');
      setTimeout(() => setDownloadState('idle'), 3000); // reset after 3s
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative h-screen scroll-mt-20 lg:scroll-mt-10 w-full flex items-center overflow-hidden">

      {/* Video */}
      <div className="absolute inset-0 z-0">
        <img
          src={thumbnail}
          alt="hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 lg:bg-linear-to-r lg:from-[#004d2c]/80 lg:to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4  w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-5xl font-bold text-white leading-tight mb-4"
          >
            Excellence from Land & Sea
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-sm md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            A trusted export house from Nellore, delivering high-quality
            <span className="font-semibold text-white"> Sona Masuri, Basmati, and Ponni rice </span>
            alongside premium <span className="font-semibold text-white"> Marine & Seafood products </span>
            to global importers.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            {/* Get Quote */}
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  window.location.hash = "contact";
                }
              }}
              className="bg-[#468e3d] hover:bg-white hover:text-[#004d2c] text-white px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-lg"
            >
              Get Quote <FaChevronRight size={12} />
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919666654679?text=Hi%20TMR%20Agro%20%26%20Marine,%20I'm%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <FaWhatsapp size={18} /> WhatsApp
            </a>

            {/* Catalog Download with state */}
            <a
              href="/TMR-Agro_Marine_Exports_Brochure.pdf"
              download="TMR_Agro_Marine_Brochure.pdf"
              onClick={handleDownload}
              className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 backdrop-blur-sm border
                ${downloadState === 'done'
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#004d2c]'
                }`}
            >
              {downloadState === 'idle' && (
                <><FaFileDownload size={14} /> Catalog</>
              )}
              {downloadState === 'downloading' && (
                <>
                  <FaSpinner size={14} className="animate-spin" /> Downloading...
                </>
              )}
              {downloadState === 'done' && (
                <>
                  <FaCheck size={14} /> Downloaded!
                </>
              )}
            </a>

          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Home;