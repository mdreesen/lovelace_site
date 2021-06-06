import React from 'react';
import { Parallax } from 'react-parallax';

// import components
import Servicedropdown from '../../components/Servicedropdown';

// import pictures
import servicehero from '../../images/dexter-chatuluka-OyvZbtXJRlA-unsplash.jpg';

const Services = () => {
    return(
        <div>
        <Parallax className="service-image" bgImage={ servicehero } strength={500}></Parallax>
        <div className="service-text-container">
            <p>From Childbirth to lactation support to baby wearing training, 
            I am here to educate and assist expecting and postpartum mothers 
            find care and assistance with perinatal services while respecting their autonomy.
            Bundled packages are eligible for a discount.</p>
        </div>

        {/* <Servicedropdown /> */}
        <Servicedropdown />
        </div>
    );
}

export default Services;