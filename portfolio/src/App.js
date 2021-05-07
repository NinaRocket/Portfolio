import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Hero backgroundImage="https://raw.githubusercontent.com/NinaRocket/Portfolio/master/portfolio/src/images/HeroIm.jpg"></Hero>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <div className="push"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
