import React from 'react';
import './Technologies.css';

export default function Technologies() {
  const techStack = [
    { name: 'HTML', icon: <img src="/assets/html.png" alt="HTML" className="tech-icon" /> },
    { name: 'CSS', icon: <img src="/assets/css.png" alt="CSS" className="tech-icon" /> },
    { name: 'JavaScript', icon: <img src="/assets/JS.png" alt="JavaScript" className="tech-icon" /> },
    { name: 'React', icon: <img src="/assets/React.png" alt="React" className="tech-icon" /> },
    { name: 'Python', icon: <img src="/assets/Python.png" alt="Python" className="tech-icon" /> },
  ];
  

  return (
    <section className="technologies-section">
      <h2
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >Technologies I Use</h2>
      <div className="technologies-grid"
      >
        {techStack.map((tech, index) => (
          <div className="tech-card" key={index}
            data-aos="flip-left"
            data-aos-duration="2000">
            {tech.icon}
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}