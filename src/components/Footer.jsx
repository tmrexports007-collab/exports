// import { 
//   FaFacebookF, 
//   FaTwitter, 
//   FaLinkedinIn, 
//   FaInstagram, 
//   FaPhoneAlt,
//   FaRegEnvelope,
//   FaMapMarkerAlt 
// } from 'react-icons/fa';
// import { HiOutlineArrowUpRight } from 'react-icons/hi2';
// import logo from "../assets/logo.jpeg";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: <FaFacebookF size={18} />, href: "#" },
//     { icon: <FaTwitter size={18} />, href: "#" },
//     { icon: <FaLinkedinIn size={18} />, href: "#" },
//     { icon: <FaInstagram size={18} />, href: "#" },
//   ];

//   return (
//     <footer id="contact" className="bg-[#FCFAF5] border-t border-gray-100 pt-20 pb-10 font-serif">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Main Footer*/}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
//           {/* Brand Column  */}
//           <div className="lg:col-span-4 flex flex-col space-y-8">
//             <div className="flex items-center gap-3">
//               <img src={logo} alt="TMR AGRO" className="h-12 w-12 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-full" />
//               <span className="text-lg font-light tracking-[0.2em] text-[#0A2540]">TMR AGRO & MARINE EXPORTS</span>
//             </div>
//             <p className="text-gray-500 font-sans font-light leading-relaxed text-sm max-w-sm">
//             Leading the global market in premium Indian Agro and Marine exports. Bridging the gap between fertile lands and pristine oceans.
//             </p>
//             <div className="flex gap-6">
//               {socialLinks.map((item, i) => (
//                 <a key={i} href={item.href} className="text-[#0A2540] hover:text-[#C5A059] transition-colors duration-300">
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

        
//           {/* Quick Links */}
// <div className="lg:col-span-2">
//   <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
//   <ul className="space-y-4 font-sans text-sm text-gray-500">
//     {[
//       { name: 'Home', target: '#home' },
//       { name: 'About Us', target: '#about' },
//       { name: 'Our Mission', target: '#mission' },
//       { name: 'Our Products', target: '#product' },
//     ].map((link) => (
//       <li key={link.name}>
//         <a 
//           href={link.target} 
//           className="hover:text-[#C5A059] transition-colors flex items-center group"
//         >
//           {link.name} <HiOutlineArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
//         </a>
//       </li>
//     ))}
//   </ul>
// </div>

         


// {/* Trust & Quality  */}
// <div className="lg:col-span-3">
//   <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Trust & Excellence</h4>
//   <ul className="space-y-4 font-sans text-sm text-gray-500">
//     {[
//       { name: 'Quality Standards', target: '#quality' }, 
//       { name: 'Why Choose Us', target: '#why-choose-us' },
//       { name: 'Export Process', target: '#mission' }, 
//       { name: 'Get a Quote', target: '#contact' }
//     ].map((link) => (
//       <li key={link.name}>
//         <a 
//           href={link.target} 
//           className="hover:text-[#C5A059] transition-colors flex items-center group"
//         >
//           {link.name} <HiOutlineArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
//         </a>
//       </li>
//     ))}
//   </ul>
// </div>
//           {/* Contact  */}
//           <div className="lg:col-span-3 flex flex-col">
//             <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Reach Us</h4>
//             <div className="space-y-6 font-sans text-sm text-gray-500">
//               <div className="flex items-start gap-4">
//                 <FaMapMarkerAlt size={18} className="text-[#C5A059] shrink-0" />
//                 <span className="leading-relaxed">Baddevolu (village), Manubolu (M), Nellore Dist - 524405</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <FaPhoneAlt size={18} className="text-[#C5A059] shrink-0" />
//                 <span>+91 96666 54679</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <FaRegEnvelope size={18} className="text-[#C5A059] shrink-0" />
//                 <span>support@tmragro.com</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
//            © {currentYear} TMR AGRO & MARINE — All Rights Reserved
//           </p>
//           <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
//             Cultivating Excellence, Exporting Trust.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import logo from "../assets/logo.jpeg";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaFacebookF size={18} />, 
      href: "https://www.facebook.com/profile.php?id=61588454324889" 
    },
    { 
      icon: <FaXTwitter size={18} />, 
      href: "https://x.com/TMR_AGRO_MARINE" 
    },
    { 
      icon: <FaLinkedinIn size={18} />, 
      href: "https://www.linkedin.com/company/tmragromarineexportspvtltd/" 
    },
    { 
      icon: <FaInstagram size={18} />, 
      href: "https://www.instagram.com/tmragromarineexports?igsh=ZWtjdjAxZXRvemsw&utm_source=qr" 
    },
  ];

  return (
    <footer id="contact" className="bg-[#FCFAF5] border-t border-gray-100 pt-20 pb-10 font-serif">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="TMR AGRO" 
                className="h-12 w-12 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-full" 
              />
              <span className="text-lg font-light tracking-[0.2em] text-[#0A2540]">TMR AGRO & MARINE EXPORTS</span>
            </div>
            <p className="text-gray-500 font-sans font-light leading-relaxed text-sm max-w-sm">
              Leading the global market in premium Indian Agro and Marine exports. Bridging the gap between fertile lands and pristine oceans.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0A2540] hover:text-[#C5A059] transition-colors duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-500">
              {[
                { name: 'Home', target: '#home' },
                { name: 'About Us', target: '#about' },
                { name: 'Our Mission', target: '#mission' },
                { name: 'Our Products', target: '#product' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.target} 
                    className="hover:text-[#C5A059] transition-colors flex items-center group"
                  >
                    {link.name} <HiOutlineArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Quality */}
          <div className="lg:col-span-3">
            <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Trust & Excellence</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-500">
              {[
                { name: 'Quality Standards', target: '#quality' }, 
                { name: 'Why Choose Us', target: '#why-choose-us' },
                { name: 'Export Process', target: '#mission' }, 
                { name: 'Get a Quote', target: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.target} 
                    className="hover:text-[#C5A059] transition-colors flex items-center group"
                  >
                    {link.name} <HiOutlineArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[#0A2540] text-xs uppercase tracking-[0.3em] font-bold mb-8">Reach Us</h4>
            <div className="space-y-6 font-sans text-sm text-gray-500">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt size={18} className="text-[#C5A059] shrink-0" />
                <span className="leading-relaxed">Baddevolu (village), Manubolu (M), Nellore Dist - 524405</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt size={18} className="text-[#C5A059] shrink-0" />
                <span>+91 96666 54679</span>
              </div>
              <div className="flex items-center gap-4">
                <FaRegEnvelope size={18} className="text-[#C5A059] shrink-0" />
                <span>support@tmragro.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
  
  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
    © {currentYear} TMR AGRO & MARINE — All Rights Reserved 
  </p>

  <p className="text-[10px] tracking-widest text-gray-500">
    Crafted by{" "}
    <a
      href="https://webzspot.com"   // 👉 replace with your actual domain
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#004d2c7e] font-semibold tracking-widest hover:underline"
    >
      Webzspot Technologies
    </a>
  </p>

  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
    Cultivating Excellence, Exporting Trust.
  </p>

</div>
      </div>
    </footer>
  );
};

export default Footer;