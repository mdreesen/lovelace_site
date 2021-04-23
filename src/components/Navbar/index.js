import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        {/*
          <a className="navbar-brand" href="#">Navbar</a>
                  */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
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
                <Link className="nav-link" to="/appointments">appointments</Link>
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