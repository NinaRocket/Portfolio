import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import Logo from "../../images/Nina Rocket Icon Red Outline.png"; 


const Navbar = ({ element }) => {
  return (
   
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">{element}
    <img src={Logo} alt="logo" className="welcome--logo" width="60" height="60" alt="" loading="lazy" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link className="nav-link active" to="/portfolio">Portfolio <span className="sr-only">(current)</span></Link>
      <Link className="nav-link" to="/contact">Contact</Link>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar; 

