import React from 'react';
import './styles/App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Motivation from "./components/Motivation";
import Projects from "./components/Projects/Projects";
import "./fontello/css/fontello.css";
import PopUp from "./components/Projects/PopUp";
import PopUpProvider from "./providers/PopUpProvider";
import PositionProvider from "./providers/PositionProvider";
import Contact from "./components/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <PositionProvider>
      <PopUpProvider>
        <div className="App">
          <Header/>
          <NavBar/>
          <About/>
          <Motivation/>
          <Projects/>
          <Contact/>
          <Footer/>
          <PopUp/>
        </div>
      </PopUpProvider>
    </PositionProvider>
  );
}

export default App;
