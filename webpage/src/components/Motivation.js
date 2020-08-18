import React, {Fragment} from 'react';
import '../styles/Motivation.css';

function Motivation() {
  return <Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#222831" fill-opacity="1"
            d="M0,96L80,85.3C160,75,320,53,480,69.3C640,85,800,139,960,165.3C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">{}</path>
    </svg>
    <div id="motivation">
      <h1 className="titleText">Hello!</h1>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#222831" fill-opacity="1"
            d="M0,224L80,224C160,224,320,224,480,197.3C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">{}</path>
    </svg>
  </Fragment>;
}

export default Motivation;
