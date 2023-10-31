import React from 'react';
import "../Head_Gear/Head_Gear.css";
import Motorcycle_Helmet from "../../../Images/Motorcycle_Helmet.jpg";
import Safety_Helmet from "../../../Images/Safety_Helmet.jpg";
import FireFighter_Helmet from "../../../Images/FireFighter_Helmet.jpg";

const Head_Gear = () => {
return (
    <div className='HeadGear' >
        <article>
            <h1>Protective Head Gear</h1>
        </article>
        <article>
            <section>
                <figure>
                    <img src={Safety_Helmet} alt="" />
                </figure>
                <figcaption>
                    <h3>Safety Helmet</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={FireFighter_Helmet} alt="" />
                </figure>
                <figcaption>
                    <h3>Fire Fighter Helmet</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Motorcycle_Helmet} alt="" />
                </figure>
                <figcaption>
                    <h3>Motorcycle Helmet</h3>
                </figcaption>
            </section>
        </article>
    </div>
)
}

export default Head_Gear