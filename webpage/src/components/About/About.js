import React from 'react';
import '../../styles/About/About.css';
import SkillsChart from "./SkillsChart";

const data = {
  "JavaScript": 5,
  "HTML": 4,
  "CSS": 4,
  "React": 4,
  "UI Design": 4,
  "Node.js": 3,
  "React Native": 3,
  "Git": 2,
}

function About() {
  return <div id="about">
    <div id="about-me-container">
      <div id="about-me">
        <div id="about-me-photo" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          <img src={require('../../img/me.jpg')} alt="Bartłomiej Orawiec"/>
        </div>
        <p id="about-me-text" data-aos="fade-right" data-aos-once="true" data-aos-delay="300">
          Bartłomiej Orawiec<span className="lighter">, Front-End developer and computer science student at the Jagiellonian University.
        Creating
        web and mobile applications is my passion which I develop for years. I am constantly trying to find better
        solutions,
        in fields of technology and UI design.</span>
        </p>
      </div>
      {SkillsChart("Skills", data)}
    </div>
  </div>;
}

export default About;
