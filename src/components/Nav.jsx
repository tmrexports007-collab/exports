import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa"
import logo from "../assets/logo.jpeg"
 
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const isManualScroll = useRef(false)
 
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "OurMission", href: "#mission" },
    { name: "Product", href: "#product" },
    { name: 'Sea Food', href: '#marine' },
    { name: "Quality", href: "#quality" },
    { name: "WhyChooseUs", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ]
 
  // ✅ Scroll spy
 useEffect(() => {
  const sections = navLinks
    .map((link) => document.getElementById(link.href.replace("#", "")))
    .filter(Boolean)

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleSection) {
        setActiveSection(visibleSection.target.id)
      }
    },
    {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // 👈 center detection zone
      threshold: [0.2, 0.4, 0.6, 0.8],
    }
  )

  sections.forEach((section) => observer.observe(section))

  return () => {
    sections.forEach((section) => observer.unobserve(section))
  }
}, [])
 
  // ✅ Click scroll handler
  const handleClick = (id) => {
    setActiveSection(id)
    isManualScroll.current = true
 
    setTimeout(() => {
      isManualScroll.current = false
    }, 800)
  }
 
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-[1000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[90px]">
 
        {/* Logo */}
        <img src={logo} alt="TMR Exports Logo" className="h-20 w-20 object-cover rounded-full" />
 
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            const isActive = activeSection === id
 
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(id)}
                className={`relative text-sm font-semibold transition-all duration-300 ${
                  isActive ? "text-blue-950" : "text-gray-600 hover:text-blue-950"
                }`}
              >
                {link.name}
 
                {/* ✅ Animated underline */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-950"
                  />
                )}
              </a>
            )
          })}
        </div>
 
        {/* CTA */}
        <div className="hidden lg:flex">
          <a
            href="#contact"
            onClick={() => handleClick("contact")}
            className="bg-blue-950 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold hover:opacity-90"
          >
            Contact <FaArrowRight size={14} />
          </a>
        </div>
 
        {/* Mobile Toggle */}
        <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
          <FaBars size={24} className="text-blue-950" />
        </div>
      </div>
 
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 z-[1100]"
            />
 
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen w-full bg-white z-[1200] p-8 flex flex-col"
            >
              <div className="flex justify-between mb-10">
                <span className="text-blue-950 font-semibold">MENU</span>
                <FaTimes onClick={() => setIsOpen(false)} size={24} />
              </div>
 
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "")
                  const isActive = activeSection === id
 
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        handleClick(id)
                        setIsOpen(false)
                      }}
                      className={`text-lg pb-2 border-b ${
                        isActive ? "text-blue-950 font-semibold" : "text-gray-600"
                      }`}
                    >
                      {link.name}
                    </a>
                  )
                })}
              </div>
 
              <div className="mt-auto text-[10px] text-gray-400 uppercase tracking-widest">
                TMR Exports © 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
 
export default Nav
 