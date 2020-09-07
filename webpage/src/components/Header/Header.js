import React, {useContext} from 'react';
import '../../styles/Header/Header.css';
import Stars from "./Stars";
import {PositionContext} from "../../providers/PositionProvider";

const starsNumber = Math.floor(window.innerWidth / 4);

function Header() {
  const {scrollToAbout} = useContext(PositionContext);
  return <div id="header">
    <Stars numberOfSmallStars={starsNumber}/>
    <div id="title">
      <h1 className="title-text">Hello!</h1>
      <br/>
      <h1 className="title-text">I'm <span className="green">Bartek</span>,</h1>
      <br/>
      <h1 className="title-text">Front-End developer.</h1>
    </div>
    <i className="jump-arrow icon-down-open" onClick={() => scrollToAbout()}/>
  </div>;
}

export default Header;
