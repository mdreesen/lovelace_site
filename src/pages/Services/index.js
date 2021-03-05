import React from 'react';

import ServiceModal from '../../components/ServiceModal';

const Services = () => {
    return(
        <div>
            <section>
                <div className="service-p-container">
                <p>Labor Support-$850 -> Demo 1</p>
                <ServiceModal />
            </div>
        </section>
        <section className="service-type-section-demo2">
            <div className="service-p-container">
                <h4>Virtual Support-$650 -> Demo 2</h4>
                <p className="p-title">• 2 prenatal visits ranging from 1-2 hours each that include:</p>
                <p>o health history</p>
                <p>o questions/concerns</p>
                <p>o mental health screening</p>
                <p>o provider questions</p>
                <p>o birth plan formation</p>
                <p className="p-title">• Labor support •</p>
                <p>o Placement on my calendar</p>
                <p>o 24/7 on call support from two weeks before due date to two weeks postpartum</p>
                <p className="p-title">• Postpartum Support •</p>
                <p>o 1 2 hour virtual visit for debriefing</p>
            </div>
        </section>
        <section className="service-type-section-demo3">
            <div className="service-p-container">
                <h4>Prenatal lactation education class-$75 (1 hour) -> Demo 3</h4>
                <p>o will be group or private depending on number of participants</p>
                <p>o common breastfeeding myths</p>
                <p>o proper latch techniques</p>
                <p>o newborn breastfeeding through toddlerhood breastfeeding </p>
            </div>
        </section>
        <section className="service-type-section-demo2">
            <div className="service-p-container-demo4">
                <h4>Childbirth education class-$200 (1.5 hrs) -> Demo 4</h4>
                <p className="demo-p4">o Group setting</p>
                <p className="demo-p4">o What is physiological birth</p>
                <p className="demo-p4">o Hormones of birth</p>
                <p className="demo-p4">o What does undisturbed broth look like</p>
            </div>
        </section>
        <section>
            <div>
                <h4>Placenta encapsulation-$250 -> Same as demo 2</h4>
                <p>o Will provide encapsulated pills in container within 3 days of birth unless otherwise discussed</p>
            </div>
        </section>
        </div>
    );
}

export default Services;