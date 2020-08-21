import React from "react";
import './App.css';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
//import HeroImg from "../../../public/assets/HeroImg.jpg";


function App() {
   return(
     <>
    <Hero backgroundImage="https://raw.githubusercontent.com/NinaRocket/Portfolio/master/portfolio/src/images/HeroIm.jpg">
         
      </Hero>
      <Navbar
      />
      </>
   )
 
};

export default App;
