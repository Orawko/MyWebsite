import React from 'react';
import '../../styles/Contact/Contact.css';
import ContactForm from "./ContactForm";
import Map from "./Map";

function Contact() {
  return <div id="contact">
    <img src={require("../../img/up.svg")} id="topWave" alt=""/>
    <div id="contactData">
      <div id="leftColumn">
        <h1 id="contactTitle">GET IN TOUCH</h1>
        <p id="contactInfo">Want to work together or have any question?<br/>
          Enter the details and I'll get back to You shortly.</p>
        <ContactForm/>
      </div>
      <div id="rightColumn">
        <Map/>
        <div id="findMeText"><p>F<br/>I<br/>N<br/>D<br/> <br/>M<br/>E<br/> <br/>H<br/>E<br/>R<br/>E</p></div>
      </div>
    </div>
  </div>
}

export default Contact;
