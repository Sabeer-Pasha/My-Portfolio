import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <h2 className="footer-name">Sabeer Pasha</h2>
      <p>Feel free to reach out to me!</p>
      <div className="footer-contact">
        <p>Email: sabir.aly999@gmail.com</p>
        <p>Phone: +91 78925 11634</p>
      </div>
      <div className="footer-icons"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000">
        <a href="https://www.linkedin.com/in/sabeer-pasha-37b493238" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://wa.me/917892511634" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <p className="footer-bottom">&copy; 2025 Sabeer Pasha. All rights reserved.</p>
    </footer>
  );
}
