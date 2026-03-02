import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import greenField from "../assets/about.jpg";
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className=" py-10 scroll-mt-20 lg:scroll-mt-10 lg:py-20 overflow-hidden">
      <div className="w-full ">

        <div className="flex flex-col lg:flex-row items-stretch min-h-150  overflow-hidden ">

          {/* Left Side*/}
          <div className="w-full lg:w-1/2 mx-auto relative min-h-125 flex items-center justify-center">

            <div className="absolute inset-0">
              <img src={greenField} alt="Rice Field" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#004d2c]/90"></div>
            </div>


            <motion.div
              
              className="relative z-10 flex flex-col items-center justify-center text-center p-8"
            >


              <motion.div initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: [0, -20, 0]
              }}
              viewport={{ once: false }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }} className="absolute inset-0 z-0 pointer-events-none ">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full relative">
                  <FaPhoneAlt

                    className="absolute left-[20%] lg:left-8 top-1/2 -translate-y-1/2 text-white opacity-20 -rotate-12 w-64 h-64 md:w-95 md:h-95"
                  />
                </div>
              </motion.div>


              <div className="relative z-20 space-y-8">
                <div className="space-y-2">

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white p-5 rounded-3xl w-fit mx-auto shadow-2xl mb-4"
                  >
                    <FaPhoneAlt size={35} className="text-[#004d2c]" />
                  </motion.div>

                  <h3 className=" text-xl md:text-4xl font-black text-white tracking-tight">TMR AGRO & MARINE</h3>
                  <div className="w-16 h-1.5 bg-[#468e3d] rounded-full mx-auto"></div>
                </div>

                <div className="space-y-6 text-white">
                  <div className="flex flex-col items-center gap-2">
                    <FaMapMarkerAlt className="text-[#468e3d] text-xl" />
                    <p className="text-sm font-medium opacity-90">Baddevolu (village), Manubolu (M), Nellore District - 524405</p>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <p className="text-3xl font-black text-white">+91 96666 54679</p>
                    <p className="text-sm uppercase tracking-[0.4em] text-white font-bold">Available 24/7</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <FaEnvelope className="text-[#468e3d] text-lg" />
                    <p className="text-sm font-bold opacity-90">support@tmragro.com</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 justify-center">

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61588454324889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#004d2c] transition-all cursor-pointer shadow-sm"
                  >
                    <FaFacebookF size={16} />
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://x.com/TMR_AGRO_MARINE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#004d2c] transition-all cursor-pointer shadow-sm"
                  >
                    <FaXTwitter size={16} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/tmragromarineexportspvtltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#004d2c] transition-all cursor-pointer shadow-sm"
                  >
                    <FaLinkedinIn size={16} />
                  </a>

                </div>

              </div>

            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 p-10 lg:p-16 bg-white flex flex-col justify-center"
          >
            <h3 className='font-extrabold text-[#004d2c] text-5xl mb-2'>Contact Us</h3>
            <p className="text-gray-400 mb-10 text-sm md:text-lg">Send us a message and we'll get back to you shortly.</p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-1 border-b border-gray-200 focus-within:border-[#468e3d] transition-colors pb-2">
                  <label className="text-base font-bold text-blue-950 uppercase tracking-widest">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-200" />
                </div>
                <div className="space-y-1 border-b border-gray-200 focus-within:border-[#468e3d] transition-colors pb-2">
                  <label className="text-base font-bold text-blue-950 uppercase tracking-widest">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-200" />
                </div>
              </div>




              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-1 border-b border-gray-200 focus-within:border-[#468e3d] transition-colors pb-2">
                  <label className="text-base font-bold text-blue-950 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="johndoe@gmail.com" className="w-full bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-200" />
                </div>
                <div className="space-y-1 border-b border-gray-200 focus-within:border-[#468e3d] transition-colors pb-2">
                  <label className="text-base font-bold text-blue-950 uppercase tracking-widest">Phone Number</label>
                  <input type="text" placeholder="+91 XXXXX XXXXX" className="w-full bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-200" />
                </div>
              </div>
              <div className="space-y-1 border-b border-gray-200 focus-within:border-[#468e3d] transition-colors pb-2">
                <label className="text-base font-bold text-blue-950 uppercase tracking-widest">Share your requirement</label>
                <textarea rows="2" placeholder="How can we help?" className="w-full bg-transparent border-none outline-none text-gray-800 placeholder:text-gray-200 resize-none" />
              </div>

              <button className="mt-4 bg-[#004d2c] hover:bg-[#468e3d] text-white px-12 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-3 w-fit">
                Submit Now <FaPaperPlane size={14} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;





