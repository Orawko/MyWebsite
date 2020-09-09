import React, {createContext} from 'react';

export const PositionContext = createContext({});
const WAVE_OFFSET = window.innerWidth > 639 ? 180 : 60;

export default function PositionProvider({children}) {
  const getElementPosition = id => document.getElementById(`${id}`).offsetTop;

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToAbout = () => {
    window.scrollTo({
      top: getElementPosition('about'),
      behavior: 'smooth',
    });
  };
  const scrollToProjects = () => {
    window.scrollTo({
      top: getElementPosition('projects') - WAVE_OFFSET,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: getElementPosition('contact') - WAVE_OFFSET,
      behavior: 'smooth',
    });
  };

  return (
    <PositionContext.Provider value={{
      scrollToHome,
      scrollToAbout,
      scrollToProjects,
      scrollToContact,
    }}>
      {children}
    </PositionContext.Provider>
  );
}