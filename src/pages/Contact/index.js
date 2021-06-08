import React from 'react';
import { Parallax } from 'react-parallax';

// import image
import contactImage from '../../images/andre-adjahoe-tqunk3qB_yU-unsplash.jpg';

const Contact = () => {
    return (
        <div>
            <Parallax className="contact-image" bgImage={contactImage} strength={550}>
                <div className="parallax-content">Contact</div>
            </Parallax>

            <div className="contact-content-container">
            <div className="contact-text-container">
                    <p>Feel free to find us on Facebook or Instagram to get to know us a little more.
                    If you feel Wild Beginnings Birth might be a good fit to serve your growing family,
                    please don't hesitate to connect, ask questions, or schedule a consultation.
                    Thank you, and we look forward to connecting with you!</p>
                </div>
                <div className='icon-container'>
                    <div><a href='tel:+1-405.501.9515'><i className="fas fa-mobile-alt fa-2x" /></a> <span>405.501.9515</span></div>
                    <div><a href="mailto: doulabrianna@gmail.com"><i className="far fa-envelope fa-2x" /></a><span>doulabrianna@gmail.com</span></div>
                    <div><a href='https://www.facebook.com/wildbeginningsdoulacare'><i className="fab fa-facebook fa-2x" /></a><span>Wild Beginnings Birth</span></div>
                    <div><a href='#'><i className="fab fa-instagram fa-2x" /></a><span>@doulabrianna</span></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;