import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Motivation from "./components/Motivation";
import Projects from "./components/Projects/Projects";
import "./fontello/css/fontello.css";
import PopUp from "./components/Projects/PopUp";
import PopUpProvider from "./providers/PopUpProvider";

function App() {
  return (
    <PopUpProvider>
      <div className="App">
        <Header/>
        <NavBar/>
        <About/>
        <Motivation/>
        <Projects/>
        <div className="Skills">Js master</div>
        <div className="Projects">Architecture portfolio</div>
        <div className="Experience">Comarch</div>
        <div className="Contact">bartlomiej.orawiec@gmail.com</div>
        <Footer/>
        <PopUp/>
      </div>
    </PopUpProvider>
  );
}

export default App;
