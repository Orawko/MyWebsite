import React, {useContext} from 'react';
import '../../styles/Projects/PopUp.css';

import {PopUpContext} from "../../providers/PopUpProvider";

const PopUp = () => {
  const {displayPopUp, popUpData} = useContext(PopUpContext);
  const {title, info} = popUpData;

  return <div className="popup-background">
    <div className="popup">
      <h2 className="popup-title">{title}</h2>
      <div onClick={() => displayPopUp(false)} className="close">{}</div>
      <div className="popup-line">
        <i className="icon-wrench"/><p className="popup-line-data">{info.technologies.join(", ")}</p>
      </div>
      <div className="popup-line">
        <i className="icon-calendar"/><p className="popup-line-data">{info.date}</p>
      </div>
      <p className="popup-description">{info.description}</p>
    </div>
  </div>;
}

export default PopUp;
