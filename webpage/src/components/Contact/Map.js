import React from 'react';
import '../../styles/Contact/Map.css';

const Map = () => <div id="map-with-icons">
  <div id="map-container">
    <a id="map-city-name" target="_blank" rel="noopener noreferrer"
       href="https://www.google.pl/maps/@50.0625749,19.9361899,13z">
      <p>Krakow</p></a>
    <i className="icon-location"/>
    <img src={require("../../img/Poland.svg")} alt=""/>
  </div>
  <div id="contact-websites">
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Orawko"><i
      className="icon-github-circled-alt2"/></a>
    <a target="_blank" rel="noopener noreferrer"
       href="https://www.linkedin.com/in/bart%C5%82omiej-orawiec-b84385159/"><i className="icon-linkedin-rect"/></a>
    <a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/u/Orawko"><i
      className="icon-codeopen"/></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/orawko"><i
      className="icon-facebook-squared"/></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/0rawko/"><i
      className="icon-instagram"/></a>
  </div>
</div>

export default Map;
