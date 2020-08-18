import React, {Fragment, useEffect} from 'react';
import '../styles/Navbar.css';

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () =>
    window.scrollY > window.innerHeight
      ? setScrolled(true)
      : setScrolled(false);

  useEffect(() => window.addEventListener('scroll', handleScroll))

  let navBarClasses = ['navBar'];
  if (scrolled) {
    navBarClasses.push('scrolled');
  }

  return <Fragment>
    <nav className={navBarClasses.join(" ")}>
      <ul id="navMenu">
        <li className="active"><a className="navBarItem" href="#">HOME</a></li>
        <li><a className="navBarItem" href="#">ABOUT ME</a></li>
        <li><a className="navBarItem" href="#">SKILLS</a></li>
        <li><a className="navBarItem" href="#">PROJECTS</a></li>
        <li><a className="navBarItem" href="#">CONTACT</a></li>
      </ul>
    </nav>
  </Fragment>
}

export default NavBar;
