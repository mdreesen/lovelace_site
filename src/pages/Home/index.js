import React from 'react';

// import images
import logo from '../../images/logo.png'
import homepageImage from '../../images/dexter-chatuluka-OyvZbtXJRlA-unsplash.jpg'

function Home() {
    return(
        <div>
            <section className="topSection">
                <div className="image-wrapper-home">
                    <div className="imgContainer">
                        <img className="homepageImage" src={homepageImage}></img>
                        <img className="logo-image" src={logo}></img>
                    </div>
                </div>
            </section>
            <section>
                <div className="about-business">
                <h2 className="mission-header">Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;