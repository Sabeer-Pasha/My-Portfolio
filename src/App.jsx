// App.jsx
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    Aos.init();      
}, [])
  
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      <NavBar/>
      <HeroSection />
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}
