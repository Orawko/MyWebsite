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

  useEffect(() => window.addEventListener('scroll', showNavBar))

  let navBarClasses = ['navBar'];
  if (scrolled) {
    navBarClasses.push('scrolled');
  }

  return <Fragment>
    <nav className={navBarClasses.join(" ")}>
      <ul id="navMenu" className="disable-select">
        <li className="navBarItem" id="navHome" onClick={scrollToHome}>HOME</li>
        <li className="navBarItem" id="navAbout" onClick={scrollToAbout}>ABOUT</li>
        <li className="navBarItem" id="navProjects" onClick={scrollToProjects}>PROJECTS</li>
        <li className="navBarItem" id="navContact" onClick={scrollToContact}>CONTACT</li>
      </ul>
    </nav>
  </Fragment>
}

export default NavBar;
