import React, {createContext, useState} from 'react';

export const PopUpContext = createContext({});
const POPUP_TOTAL_WIDTH = "61vw"

export default function PopUpProvider({children}) {
  const [popUpData, setPopUpData] = useState({info: {technologies: []}});

  const displayPopUp = popUpDisplayed => {
    if (popUpDisplayed) {
      document.body.style = 'overflow: hidden';
      document.getElementById("popUp").style.left = `calc(50% - ${POPUP_TOTAL_WIDTH} / 2)`;
      document.getElementById("popUpBackground").style.visibility = "visible";
    } else {
      document.body.style = 'overflow: auto';
      document.getElementById("popUp").style.left = `-${POPUP_TOTAL_WIDTH}`;
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