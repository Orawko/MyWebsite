import React, {useContext} from 'react';
import '../../styles/Projects/PopUp.css';

import {PopUpContext} from "../../providers/PopUpProvider";

const PopUp = () => {
  const {displayPopUp, popUpData} = useContext(PopUpContext);
  const {title, info} = popUpData;

  return <div id="popUpBackground">
    <div id="popUp">
      <h2 id="popUpTitle">{title}</h2>
      <div onClick={() => displayPopUp(false)} className="close">{}</div>
      <div className="popUpLine">
        <i className="icon-calendar"/><p className="popUpLineData">{info.date}</p>
      </div>
      <div className="popUpLine">
        <i className="icon-wrench"/><p className="popUpLineData">{info.technologies.join(", ")}</p>
      </div>
      <p id="popUpDescription">{info.description}.</p>
    </div>
  </div>;
}

export default PopUp;
