import React, {createContext, useState} from 'react';

export const PopUpContext = createContext({});

export default function PopUpProvider({children}) {
  const [popUpData, setPopUpData] = useState({info: {technologies: []}});

  const displayPopUp = popUpDisplayed => {
    if (popUpDisplayed) {
      document.body.style = 'overflow: hidden';
      document.getElementById("popUp").style.left = "calc(50% - 61vw / 2)";
      document.getElementById("popUpBackground").style.visibility = "visible";
    } else {
      document.body.style = 'overflow: auto';
      document.getElementById("popUp").style.left = "-61vw";
      document.getElementById("popUpBackground").style.visibility = "hidden";
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