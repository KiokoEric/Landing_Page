import React, { useEffect } from 'react';
import "../About/About.css";
import AOS from "aos";
import About_Profile  from "../../Images/About_Profile2.jpg";
import Story_Image  from "../../Images/Story_Image.webp";

const About = () => {

    useEffect(() => {
        AOS.init();
    })

return (
<div className='About' >
    <article>
        <h1>About Us</h1>
    </article>
    <article data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" >
        <section>
            <figure>
                <img src={About_Profile} alt="" />
            </figure>
        </section>
        <section>
            <div>
                <h3>Vision</h3>
                <p>
                    To be a national leader in providing innovative, high-quality, and sustainable Personal Protective Equipment solutions that safeguard the health and safety of individuals, businesses and communities.
                </p>
            </div>
            <div>
                <h3>Mission</h3>
                <p>
                    At Davesafe Limited, our mission is to ensure the safety and well-being of individuals in various industries by providing high-quality Personal Protective Equipment (PPE). We believe that everyone has the right to work and live in a safe environment and we are dedicated to making this a reality through our products and services.
                </p>
            </div>
        </section>
    </article>
    <article data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" >
        <section>
            <h3>Our Story</h3>
            <p>
            Davesafe Limited was founded in the year 2015 and has grown as a leading force in the Protective Equipment industry. Our journey began with a vision to make workplaces safer and healthier, driven by a deep sense of responsibility to protect workers, businesses and communities. Over the years, we've tirelessly strived to turn this vision into a reality. From humble beginnings, we have grown into a trusted name in the industry, thanks to our unwavering commitment to excellence and quality.
            </p>
        </section>
        <section>
            <img src={Story_Image} alt="" />
        </section>
    </article>
</div>
)
}

export default About 