import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive and animated portfolio built using React, showcasing my projects, technologies, and contact info.",
    image: "/assets/portfolio.jpg",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "An admin panel built with React and Chart.js to manage orders, products, and customer analytics in real time.",
    image: "/assets/e-commers.jpg",
  },
  {
    title: "Weather App",
    description:
      "A clean weather app built with HTML, CSS, and JavaScript that fetches real-time data from a weather API.",
    image: "/assets/weather.jpg",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 data-aos="zoom-in-up"
        data-aos-duration="1000"
      >My Projects</h2>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div className="project-card"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
