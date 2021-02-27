import React from 'react';

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
                <a className="nav-link" aria-current="page" href="/">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/appointments">appointments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    );
}

export default Navbar;