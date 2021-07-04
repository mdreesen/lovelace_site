import React, { Suspense } from 'react';

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
                <a className="nav-link" aria-current="page" href="/">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>   
      </Suspense>   
    );
}

export default Navbar;