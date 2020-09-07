import React, {createContext, useState} from 'react';

export const PopUpContext = createContext({});
const POPUP_TOTAL_WIDTH = "61vw"

export default function PopUpProvider({children}) {
  const [popUpData, setPopUpData] = useState({info: {technologies: []}});

  const displayPopUp = popUpDisplayed => {
    if (popUpDisplayed) {
      document.body.style = 'overflow: hidden';
      document.getElementsByClassName("popup")[0].style.left = `calc(50% - ${POPUP_TOTAL_WIDTH} / 2)`;
      document.getElementsByClassName("popup-background")[0].style.visibility = "visible";
    } else {
      document.body.style = 'overflow: auto';
      document.getElementsByClassName("popup")[0].style.left = `-${POPUP_TOTAL_WIDTH}`;
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