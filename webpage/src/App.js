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
import Contact from "./components/Contact/Contact";

function App() {
  return (
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
  );
}

export default App;
