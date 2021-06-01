import React from 'react';

// import images
import logo from '../../images/logo.png'
import homepageImage from '../../images/allison-wopata-4qt6g8Aabcw-unsplash.jpg'

function Home() {
    return(
        <div>
            <section className="topSection">
                <div className="image-wrapper-home">
                    <div className="imgContainer">
                        <div className="logo-image-wrapper">
                            {/* <img className="homepageImage" src={homepageImage}></img> */}
                            {/* <img className="logo-image" src={logo}></img> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;