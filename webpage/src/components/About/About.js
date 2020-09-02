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
    <div id="aboutMe">
      <div id="aboutMePhoto">
        <img src={require('../../img/me.jpg')} alt="Bartłomiej Orawiec"/>
      </div>
      <p id="aboutMeText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque sem at orci iaculis, quis
        imperdiet dui posuere. Donec in arcu at libero hendrerit efficitur. Quisque luctus rutrum commodo. Cras semper
        ut nulla id maximus.
      </p>
    </div>
    {SkillsChart("Skills", data)}
  </div>;
}

export default About;
