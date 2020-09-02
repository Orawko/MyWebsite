import React, {Fragment} from 'react';
import '../styles/Motivation.css';

function Motivation() {
  return <Fragment>
    <img src={require("../img/up.svg")} alt=""/>
    <div id="motivation">
      <img id="tree" src={require("../img/tree.svg")} alt=""/>
      <div id="motivationContent">
        <h2 id="motivationTitle">Good start to grow</h2>
        <p id="motivationText">At the beginning of my career I decided to focus on JavaScript, the basement for modern
          web frameworks and libraries. Having deep understanding of it gives me ability to avoid errors and learn new
          technologies much quicker.</p>
      </div>
    </div>
    <img src={require("../img/down.svg")} alt=""/>
  </Fragment>;
}

export default Motivation;
