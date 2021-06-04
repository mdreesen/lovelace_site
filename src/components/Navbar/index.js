import React from 'react';
import { Link } from 'react-router-dom';

// import logo
import logo from '../../images/logo.png'



const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
                  <img alt="logo" className="logo-nav" src={logo}></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="https://img.icons8.com/cotton/64/000000/menu.png" />
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
    );
}

export default Navbar;