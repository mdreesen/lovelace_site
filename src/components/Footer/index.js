import React, { Suspense } from 'react';
// import { Link } from 'react-router-dom';

function Footer() {

    return (
        <Suspense fallback={<div/>}>
            <nav className="footer navbar-expand-lg">
                {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
                <div className="icon-left">
                    <ul className="icon-column">
                        {/* <a className="footer-link"><Link to="">About</Link></a> */}
                        {/* <a><Link to="/worker-login"></Link></a> */}
                        {/* <a className="footer-link"><Link to="/" /></a> */}

                        {/* <li className="footer-link">copyright of </li> */}
                    </ul>
                </div>
                <div className="icon-right">
                    <ul className="icon-container-footer">
                    <div><a href='tel:+1-405.501.9515'><i className="fas fa-mobile-alt fa-2x" /></a></div>
                        <div><a href="mailto: doulabrianna@gmail.com"><i className="far fa-envelope fa-2x" /></a></div>
                        <div><a href='https://www.facebook.com/wildbeginningsdoulacare'><i className="fab fa-facebook fa-2x" /></a></div>
                        <div><a href='https://www.instagram.com/doulabrianna/'><i className="fab fa-instagram fa-2x" /></a></div>
                    </ul>
                </div>
            </nav>
        </Suspense>
    );
}

export default Footer;