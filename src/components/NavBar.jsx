import React from "react";
import "./NavBar.css";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function NavBar() {
    return (
        <nav className="navbar"
        data-aos="fade-down"
        data-aos-duration="1000"
        >
            <div className="div-logo-img">
                <img src="/assets/Sabeer Logo.png" className="logo-img" alt="logo " />
            </div>
            <div className="navbar-right">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com/in/sabeer-pasha-37b493238" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://wa.me/7892511634" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </div>
        </nav>
    );
}
