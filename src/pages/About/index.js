import React, { Suspense } from 'react';
import { Parallax } from 'react-parallax';

// import images
import briannaImage from '../../images/briannaNew.jpeg';
import familyImage from '../../images/familyImage.jpeg';
// const briannaImage = lazy(() => import('../../images/briannaNew.jpeg'))

const About = () => {
    return (
        <div>
            <div className="about-container">
                <Parallax className="brianna-image" bgImage={briannaImage} strength={550}>
                    <div className="parallax-content">About</div>
                </Parallax>
                <Suspense fallback={<div />}>
                    <div className="about-section-two">
                        <div className="about-text-container">
                            <div className="about-para-container">
                                <h3 className="brianna-name-title">Hello, I’m Brianna Lovelace!</h3>
                                <div className="qualification-container">
                                    <h4 className="qualification">Doula Certificate</h4>
                                    <h4 className="qualification">Childbirth Educator Certificate</h4>
                                    <h4 className="qualification">Lactation Specialist Certificate</h4>
                                    <h4 className="qualification">Baby Wearing Educator Certificate</h4>
                                    <h4 className="qualification">Placenta Specialist Certificate</h4>
                                </div>

                                <p className="about-text-one">I have a heart to support birthing and postpartum mothers.
                                After marrying my highschool sweetheart, earning my Bachleor’s degree in psychology and becoming pregnant
                                with our first child, I became interested in becoming a doula.
                                I later trained at the Indie Birth Association, which emphasizes autonomous and natural birthing practices,
                                as well as Uzazi Village, which prioritizes birth assistance for black and brown families.
                                These Associations have given me unique experiences to better serve families.
                                I’m so grateful for my supportive husband, with whom I now have 3 young children,
                                or encouraging me to pursue my dreams. In my free time I love to spend time with my family,
                                homeschool my children, go to church with my family, read the Word, work on handcrafts, garden,
                                explore the outdoors (kids and dirt were made for each other!) and continue my birth work education
                        to become a midwife one day.</p>

                                <p className="about-text-two">When I was pregnant with my oldest,
                                I was fortunate to have a doula support me through his birth. She was even able to be there in the hospital with me,
                                where literally everything went according to plan. Not everyone has that experience, but I am grateful she was there to guide
                                the process and advocate for me. For my second birth, I decided I needed to freebirth and I had my baby at home with my husband.
                        I had a great experience at home and went on to birth the same way for my third baby.</p>

                                <p className="about-text-three">It was after I had my second child that I finally decided to step out and become a doula.
                                I see that our natural-minded, freebirth & BIPOC communities needed more birthing support during this amazing season of pregnancy.
                                Black women have a higher c-section rate and both women and their babies have a much higher mortality when not using a doula for support.
                        I want to help influence those positive outcomes and support mothers and fathers through the process.</p>

                                <p className="about-text-four">I can’t wait to learn more about you!
                                Please reach out to schedule a free consultation so
                        that we can better get to know each other & see if we might be a good fit.</p>
                                {/* <Parallax className="family-image" bgImage={ familyImage } strength={500}></Parallax> */}
                                <div className="family-image-container">
                                    <img alt="family" className="family-image" src={familyImage}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </Suspense>
            </div>
        </div>
    );
}

export default About;