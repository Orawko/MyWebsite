import React from 'react';
import '../styles/App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import About from "./About";
import Footer from "./Footer";
import Motivation from "./Motivation";

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <About/>
      <Motivation/>
      <div className="Skills">Js master</div>
      <div className="Projects">Architecture portfolio</div>
      <div className="Experience">Comarch</div>
      <div className="Contact">bartlomiej.orawiec@gmail.com</div>
      <Footer/>
    </div>
  );
}

export default App;
