import React from "react";
import "./style.css";



function Navbar(){

    return(
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><strong>Home</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
        <div>
            <li className="nav-item">
    
            </li>
        </div> 
        
        
            </ul>
        </div>
        </nav>
        )
};

export default Navbar; 


