import React, { Suspense } from 'react';

// import pictures
import logoImage from '../../images/logo.png';

function Home() {
    return (
        <Suspense fallback={<div />}>
            <div>
                <section className="topSection">
                    <div className="image-wrapper-home">
                        <div className="imgContainer">
                            <div className="logo-image-wrapper">
                                <img alt="logo wild beginnings" className="homepage-logo" src={logoImage}></img>
                            </div>
                        </div>
                    </div>

                    {/* <div className="divider"></div> */}
                    <div className="homepage-statement-container">
                        <p className="homepage-statement">The beginning of new life can be a wild time.
                        Here at Wild Beginnings Birth we aim to support your family throughout pregnancy,
                        labor and postpartum in a way that is unique to your family’s needs.
                        We know (and science agrees!) that doulas are an important part of the birth team.
                        Having a doula is statistically proven to improve birth outcomes.
                        We know that mothers who continuously use a doula have a higher chance of a spontaneous
                        vaginal birth and are less likely to have pain medication, less likely to have instrumental assisted births,
                        and less likely to have negative feelings about birth. With this in mind, we come ready to help
                    families educate and advocate for themselves on this amazing journey.</p>
                    </div>
                </section>
            </div>
        </Suspense>

    );
}

export default Home;