import React from 'react';
import '../styles/Header.css';

function Header() {
  return <div id="header">
    <div id="title">
      <h1 className="titleText">Hello!</h1>
      <br/>
      <h1 className="titleText">I'm <span className="green">Bartek</span>,</h1>
      <br/>
      <h1 className="titleText">Frontend developer.</h1>
      <button>About me</button>
    </div>
  </div>;
}

export default Header;
