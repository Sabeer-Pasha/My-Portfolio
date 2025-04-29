import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import Typed from "typed.js";

export default function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Sabeer Pasha,", "FrontEnd Developer."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      contentType: 'html', 
      cursorChar: '<span class="typed-cursor">|</span>',
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-text">
        <div className="hero-name">
          <h4 ref={typedRef}></h4>
        </div>
        <p className="hero-summary">
          I am a passionate frontend web developer with a strong focus on crafting
          dynamic, responsive, and user-friendly web applications. I have honed my
          skills in modern frontend technologies like React, Tailwind CSS. I
          specialize in building seamless user interfaces, optimizing performance,
          and enhancing user experiences. My goal is to leverage my expertise to
          create visually stunning and highly functional applications that drive
          engagement and business success.
        </p>
      </div>
      <div className="hero-image-container">
        <img src="/assets/sabeer.pasha.jpg" className="hero-image" alt="logo" />
      </div>
    </div>
  );
}