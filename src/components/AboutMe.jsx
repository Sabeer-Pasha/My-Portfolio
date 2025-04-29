// AboutMe.jsx
import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <section className="about-section">
            <h2 className="about-title"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            >About Me</h2>
            <p className="about-summary"
            data-aos="zoom-in-up"
            data-aos-duration="2500">
                I am a passionate Front-End Developer with a background in Computer Science, currently pursuing my BCA under Bangalore Central University. I bring 4 years of experience as a Lead Customer Service Manager at C-Square Info Solutions, Bangalore, and have a solid understanding of front-end development using HTML, CSS, JavaScript, and ReactJS. My goal is to craft intuitive, user-friendly interfaces with elegant and efficient code.
            </p>
            <p className="about-details"
             data-aos="zoom-in-up"
             data-aos-duration="1500"
             >
            With a deep interest in modern web technologies and a commitment to lifelong learning, I have been consistently upgrading my skills in the MERN stack and front-end frameworks. I'm passionate about solving problems, collaborating with creative teams, and turning designs into reality.
            I thrive in dynamic environments where I can combine my technical skills with my ability to understand user needs. My experience in customer service has sharpened my communication and problem-solving abilities, which now complement my technical strengths. I am eager to contribute to innovative projects that have a real impact and grow within a team that values creativity, clean code, and continuous improvement.
            </p>
        </section>
    );
}
