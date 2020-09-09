import React from 'react';
import '../styles/Motivation.css';

function Motivation() {
  return <div id="motivation">
    <img src={require("../img/up.svg")} className="wave wave-top" alt=""/>
    <div id="motivation-background">
      <div id="motivation-container">
        <img id="tree" src={require("../img/tree.svg")} alt="" data-aos="zoom-in" data-aos-once="true"
             data-aos-delay="300"/>
        <div id="motivation-content" data-aos="zoom-in" data-aos-once="true" data-aos-delay="300">
          <h2 id="motivation-title">Good start to grow</h2>
          <p id="motivation-text">At the beginning of my career I decided to focus on JavaScript, the basement for
            modern
            web frameworks and libraries. Having deep understanding of it gives me ability to avoid errors and learn new
            technologies much quicker.</p>
        </div>
      </div>
    </div>
    <img src={require("../img/down.svg")} className="wave wave-bottom" alt=""/>
  </div>
}

export default Motivation;
