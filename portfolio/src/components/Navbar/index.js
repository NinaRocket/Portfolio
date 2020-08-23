import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 
import Logo from "../../images/redicon.svg"; 


const Navbar = ({ element }) => {
  return (
   
<nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
  <a className="navbar-brand" href="/">{element}
    <img src={Logo} alt="logo" className="welcome--logo" width="65" height="65" alt="" loading="lazy" /></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav ml-auto">
     <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio <span className="sr-only">(current)</span></Link></li> 
     
      <li className="nav-item"> <Link className="nav-link" to="/contact">Contact</Link></li> 
    </ul>
  
  </div>
</nav>
  )
}

export default Navbar; 

