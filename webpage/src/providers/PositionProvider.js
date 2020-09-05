import React, {createContext} from 'react';

export const PositionContext = createContext({});
const NAV_HEIGHT = 42;
const WAVE_OFFSET = 120;

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
      top: getElementPosition('about') - NAV_HEIGHT,
      behavior: 'smooth',
    });
  };
  const scrollToProjects = () => {
    window.scrollTo({
      top: getElementPosition('projects') - NAV_HEIGHT - WAVE_OFFSET,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: getElementPosition('contact') - NAV_HEIGHT - WAVE_OFFSET,
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