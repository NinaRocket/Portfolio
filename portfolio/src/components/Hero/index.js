import React from "react";
import HeroImg from "../images/HeroImg.jpg";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${HeroImg})` }}>
      {props.children}
     
    </div>
  );
}

export default Hero;

