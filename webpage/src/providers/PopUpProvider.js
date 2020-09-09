import React, {createContext, useState} from 'react';

export const PopUpContext = createContext({});

export default function PopUpProvider({children}) {
  const [popUpData, setPopUpData] = useState({info: {technologies: []}});

  const displayPopUp = popUpDisplayed => {
    const PopupTotalWidth = window.innerWidth > 639 ? "81em" : "43em";

    if (popUpDisplayed) {
      document.body.style = 'overflow: hidden';
      document.getElementsByClassName("popup")[0].style.left = `calc(50% - ${PopupTotalWidth} / 2)`;
      document.getElementsByClassName("popup-background")[0].style.visibility = "visible";
    } else {
      document.body.style = 'overflow: auto';
      document.getElementsByClassName("popup")[0].style.left = `-${PopupTotalWidth}`;
      document.getElementsByClassName("popup-background")[0].style.visibility = "hidden";
    }
  }

  return (
    <PopUpContext.Provider value={{
      displayPopUp, popUpData, setPopUpData
    }}>
      {children}
    </PopUpContext.Provider>
  );
}