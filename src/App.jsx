import React from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import Nav from "./components/Nav";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurMission from "./components/OurMission";
import Quality from "./components/Quality";
import Marine from "./components/Marine";
function AppContent() {
  return (
    <div className="font-serif bg-white">
      <Nav />
      <Home id="home" />
      <About id="about" />
      <OurMission id="mission" />
      <Products id="product" />
      <Marine id="marine"/>
      <Quality id="quality" />
      <WhyChooseUs id="why-choose-us" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}