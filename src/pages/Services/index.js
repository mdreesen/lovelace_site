import React from 'react';


// import pictures
import photoOne from '../../images/allison-wopata-4qt6g8Aabcw-unsplash.jpg'
import photoTwo from '../../images/andre-adjahoe-tqunk3qB_yU-unsplash.jpg';
import photoThree from '../../images/dexter-chatuluka-OyvZbtXJRlA-unsplash.jpg'
import photoFour from '../../images/eibner-saliba-zhWUl24kf5A-unsplash.jpg';
import photoFive from '../../images/ella-jardim-MshUpuE1SK0-unsplash.jpg';

const Services = () => {
    return(
        <div>
            <section className="service-type-section">
                <div className="service-p-container">
                <h4 className="service-title">Labor Support-$850</h4>
                <div className="service-image-container">
                    <img className="serviceImgLaborSupport" src={photoTwo}></img>
                </div>
                <div className="p-text-container">
                    <p className="p-title">3 prenatal visits ranging from 1-2 hours each that include:</p>
                    <p className="service-details">o health history</p>
                    <p>o questions/concerns</p>
                    <p>o mental health screening</p>
                    <p>o provider questions</p>
                    <p>o comfort measures class</p>
                    <p>o partner preparations</p>
                    <p>o birth plan formation</p>
                    <p>o end of pregnancy reflections</p>
                    <p className="p-title">• Labor support •</p>
                    <p>o Placement on my calendar</p>
                    <p>o 24/7 on call support from two weeks before due date to two weeks postpartum</p>
                    <p>o My physical presence at your preferred labor and birth location(s)</p>
                    <p className="p-title">• Postpartum Support •</p>
                    <p>o Up to 2 hours of support after birth</p>
                    <p>o Breastfeeding troubleshooting</p>
                    <p>o 1 2 hour home visit for debriefing</p>
                </div>
            </div>
        </section>
        <section className="service-type-section">
            <div className="service-p-container">
                <h4 className="service-title">Virtual Support-$650</h4>
                    <div className="p-text-container">
                        <p className="p-title">• 2 prenatal visits ranging from 1-2 hours each that include:</p>
                        <p>o health history</p>
                        <p>o questions/concerns</p>
                        <p>o mental health screening</p>
                        <p>o provider questions</p>
                        <p>o birth plan formation</p>
                        <p className="p-text p-title">• Labor support •</p>
                        <p>o Placement on my calendar</p>
                        <p>o 24/7 on call support from two weeks before due date to two weeks postpartum</p>
                        <p className="p-text p-title">• Postpartum Support •</p>
                        <p>o 1 2 hour virtual visit for debriefing</p>
                    </div>
            </div>
        </section>
        <section className="service-type-section">
            <div className="service-p-container">
            <div>
                <img className="serviceImgLaborSupport" src={photoFour}></img>
            </div>
                <h4 className="service-title">Prenatal lactation education class-$75 (1 hour)</h4>
                <div className="p-text-container">
                    <p>o will be group or private depending on number of participants</p>
                    <p>o common breastfeeding myths</p>
                    <p>o proper latch techniques</p>
                    <p>o newborn breastfeeding through toddlerhood breastfeeding </p>
                </div>
            </div>
        </section>
        <section className="service-type-section">
            <div className="service-p-container">
                <h4 className="service-title">Childbirth education class-$200 (1.5 hrs)</h4>
                <div className="p-text-container">
                    <p>o Group setting</p>
                    <p>o What is physiological birth</p>
                    <p>o Hormones of birth</p>
                    <p>o What does undisturbed broth look like</p>
                </div>
            </div>
        </section>
        <section className="service-type-section">
            <div className="service-p-container">
                <h4 className="service-title">Placenta encapsulation-$250</h4>
                <div className="p-text-container">
                    <p>o Will provide encapsulated pills in container within 3 days of birth unless otherwise discussed</p>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Services;