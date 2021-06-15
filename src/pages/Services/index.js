import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';

// import components
import Servicedropdown from '../../components/Servicedropdown';

// import pictures
import servicehero from '../../images/eibner-saliba-zhWUl24kf5A-unsplash.jpg';

const Services = () => {

        const darkenImage = {
            background: 'rgba(0,0,0,0.7'
        }

    return (
        <Suspense fallback={<div />}>
            <div>
                <Parallax style={darkenImage} className="service-image" bgImage={servicehero} strength={550}>
                    <div className="parallax-content">Services</div>
                </Parallax>
                <div className="service-text-container">
                    <p>From Childbirth to lactation support to baby wearing training,
                    I am here to educate and assist expecting and postpartum mothers
                    find care and assistance with perinatal services while respecting their autonomy.
            Bundled packages are eligible for a discount.</p>
                </div>
                <Servicedropdown />
            </div>
        </Suspense>

    );
}

export default Services;