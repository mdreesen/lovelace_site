import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery';

// import logo
import logo from '../../images/logo.png'



const Navbar = () => {

    return(
      <Suspense fallback={<div/>}>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
                  <img alt="logo wild beginnings" className="logo-nav" src={logo}></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className="hamburger-icon"><i className="fas fa-bars fa-lg" /></div>
          </button>
          <div className="navbar-link-container collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>   
      </Suspense>   
    );
}

export default Navbar;