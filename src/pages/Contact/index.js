import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';
import 'aos/dist/aos.css';

// import image
import contactImage from '../../images/andre-adjahoe-tqunk3qB_yU-unsplash.jpg';

const Contact = () => {
    return (
        <Suspense fallback={<div />}>
            <div>
                <Parallax className="contact-image" bgImage={contactImage} strength={200}>
                <div style={{height: "100vh"}}>
                        <div className="parallax-content">Contact</div>
                    </div>
                </Parallax>

                <div className="contact-content-container" data-aos="fade-in">
                    <div className="contact-text-container">
                        <p>Feel free to find us on Facebook or Instagram to get to know us a little more.
                        If you feel Wild Beginnings Birth might be a good fit to serve your growing family,
                        please don't hesitate to connect, ask questions, or schedule a consultation.
                    Thank you, and we look forward to connecting with you!</p>
                    </div>
                    <div className='icon-container'>
                        <div><a href='tel:+1-405.501.9515'><i className="fas fa-mobile-alt fa-2x" /><span>405.501.9515</span></a></div>
                        <div><a href="mailto: doulabrianna@gmail.com"><i className="far fa-envelope fa-2x" /><span>doulabrianna@gmail.com</span></a></div>
                        <div><a href='https://www.facebook.com/wildbeginningsdoulacare'><i className="fab fa-facebook fa-2x" /><span>Wild Beginnings Birth</span></a></div>
                        <div><a href='https://www.instagram.com/doulabrianna/'><i className="fab fa-instagram fa-2x" /><span>@doulabrianna</span></a></div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}

export default Contact;