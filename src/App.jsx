import React from "react";
// import Counter from "./components/Counter"
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css"
function App(){

  return(
    <>
    {/* <Counter/> */}
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Contact/>
    <Footer/>

    </>
  );
}
export default App 