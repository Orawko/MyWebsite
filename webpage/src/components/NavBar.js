import React, {Fragment, useContext, useEffect} from 'react';
import '../styles/Navbar.css';
import {PositionContext} from "../providers/PositionProvider";

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);
  const {scrollToHome, scrollToAbout, scrollToProjects, scrollToContact} = useContext(PositionContext);

  const showNavBar = () =>
    window.scrollY > window.innerHeight
      ? setScrolled(true)
      : setScrolled(false);
  //
  // const setHighlightItem = () => {
  //   (function clearHighlight() {
  //     ['navHome', 'navAbout', 'navProjects', 'navContact']
  //       .map(item => document.getElementById(item).style.color = '#fff');
  //   })();
  //   const elementVisible = elementId => window.scrollY > document.getElementById(elementId).offsetTop - 400;
  //   const setHighlight = elementId => document.getElementById(elementId).style.color = '#4f8a8b';
  //
  //   if (elementVisible('contact')) {
  //     setHighlight('navContact');
  //   } else if (elementVisible('projects')) {
  //     setHighlight('navProjects');
  //   } else if (elementVisible('about')) {
  //     setHighlight('navAbout');
  //   } else {
  //     setHighlight('navHome');
  //   }
  // }

  useEffect(() => window.addEventListener('scroll', showNavBar))
  // useEffect(() => window.addEventListener('scroll', setHighlightItem));

  let navBarClasses = ['navBar'];
  if (scrolled) {
    navBarClasses.push('scrolled');
  }

  return <Fragment>
    <nav className={navBarClasses.join(" ")}>
      <ul id="navMenu">
        <li className="navBarItem" id="navHome" onClick={scrollToHome}>HOME</li>
        <li className="navBarItem" id="navAbout" onClick={scrollToAbout}>ABOUT</li>
        <li className="navBarItem" id="navProjects" onClick={scrollToProjects}>PROJECTS</li>
        <li className="navBarItem" id="navContact" onClick={scrollToContact}>CONTACT</li>
      </ul>
    </nav>
  </Fragment>
}

export default NavBar;
