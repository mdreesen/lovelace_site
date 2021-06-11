import React from 'react';

function Servicedropdown() {
    return (
        <div>
            <div className="menu">

                {/* Menu item one */}
                <li className="item" id='birthdoula'>
                    <a href='#birthdoula' className="menu-link">+ Birth Doula</a>
                    <div className="imenu">
                        <p>
                            Establishing client relationship and determining birthing preferences and the best ways I can support you and your family before, during and after birth, as well as educating your partner on your specific coping mechanisms and your preferred comfort measures. This package includes:
                            <br/>
                            - 2 prenatal visits (up to 2 hours each visit)
                            <br/>
                            - 1 postpartum visit (2 hours)
                            <br/>
                            - birth plan creation
                            <br/>
                            - unlimited labor support
                            <br/>
                            - continuous support and contact throughout pregnancy
                            <br/>
                            - 24/7 on call support starting at 38 weeks
                            <br/>
                            Starting at $850
                        </p>
                    </div>
                </li>

                {/* Menu item two */}
                <li className="item" id='classes'>
                    <a href='#classes' className="menu-link">+ Childbirth Education</a>
                    <div className="imenu">
                        <p>
                            These “labor blueprint” courses are designed for parents considering home birth, hospital birth, unmedicated birth, freebirth, or anyone curious about the physiological processes (internal processes) of labor.
                            <br />
                            - Childbirth Education (2 hours)
                            <br />
                            - what is physiological birth
                            <br />
                            - hormones of birth
                            <br />
                            - what undisturbed birth looks like
                            <br />
                            - Q&amp; A at the end of each class
                            <br />
                            Starting at $175  (available in group &amp; individual settings)
                        </p>
                    </div>
                </li>

                {/* Menu item three */}
                <li className="item" id='lactationEducation'>
                    <a href='#lactationEducation' className="menu-link">+ Lactation Education</a>
                    <div className="imenu">
                        <p>
                            (1.5 hours)
                            <br/>
                            It’s best to know how to breastfeed your baby before they’re here. This course is designed specifically for pregnant mothers and their partner to learn how to breastfeed and what is involved in the process. This no self-exposure course can be taken alone or with a partner.
                            <br/>
                            - proper latch techniques
                            <br/>
                            - newborn through toddlerhood breastfeeding
                            <br/>
                            - troubleshooting common issues
                            <br/>
                            - when and how to seek further support
                            <br/>
                            Starting at $100 (available in group and individuals settings)
                        </p>
                    </div>
                </li>

                {/* Menu item four */}
                <li className="item" id='postpartumLactationSupport'>
                    <a href='#postpartumLactationSupport' className="menu-link">+ Postpartum Lactation Support</a>
                    <div className="imenu">
                        <p>
                            This service provides assessment &amp; guidance or referrals for mothers needing lactation help. This is a starting point to evaluate what obstacles you and your child are encountering.
                            <br />
                            - Assessment
                            <br />
                            - Advice and hands-on help with positioning, latching and more.
                            <br />
                            Starting at $40 per hour
                        </p>
                    </div>
                </li>

                {/* Menu item five */}
                <li className="item" id='babywearingEducation'>
                    <a href='#babywearingEducation' className="menu-link">+ Babywearing Education</a>
                    <div className="imenu">
                        <p>
                            This intro to babywearing class, is for everyone - pregnant or postpartum, it will give parents, grandparents, caregivers, etc. knowledge and confidence on how to wear baby safely, comfortably, and practically - so you can wear baby anywhere you want.
                            <br />
                            - different types of carriers
                            <br />
                            - newborn through toddlerhood babywearing
                            <br />
                            - babywearing safety
                            <br />
                            Starting at $60
                        </p>
                    </div>
                </li>

                {/* Menu item six */}
                <li className="item" id='virtualDoulaOfficeHours'>
                    <a href='#virtualDoulaOfficeHours' className="menu-link">+ Virtual Doula Office Hours</a>
                    <div className="imenu">
                        <p>
                            All services listed are available in-person, virtually or a combination of in-person and virtual visits for the same cost. Pay What You Can, $25 suggested.
                            <br />
                            - 45 minute video call
                            <br />
                            - Question-focused meetings, no specific pre-research or follow up included, to keep the rate low and flexible
                            <br />
                            - Perfect for expecting mothers looking to complement their birth education or focus on a specific topic
                            <br />
                        </p>
                    </div>
                </li>


            </div>
        </div>
    );
}

export default Servicedropdown;