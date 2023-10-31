import React from 'react';
import "../Face_Protection/Face_Protection.css";
import Face_Sheild from "../../../Images/Face_Shield.webp";
import Safety_Goggles from "../../../Images/Safety_Goggles.jpg";
import Safety_Spectacles from "../../../Images/Safety_Spectacles.jpg";
import Welding_Goggles from "../../../Images/Welding_Goggles.jpg";
import Welding_Sheild from "../../../Images/Welding_Shield.jpg";

const Face_Protection = () => {
return (
    <div className='FaceProtection' >
        <article>
            <h1>Eye and Face Protection</h1>
        </article>
        <article>
        <section>
            <figure>
                <img src={Face_Sheild} alt="" />
            </figure>
            <figcaption>
                <h3>Face Shield</h3>
            </figcaption>
        </section>
        <section>
            <figure>
                <img src={Safety_Goggles} alt="" />
            </figure>
            <figcaption>
                <h3>Safety Goggles</h3>
            </figcaption>
        </section>
        <section>
            <figure>
                <img src={Safety_Spectacles} alt="" />
            </figure>
            <figcaption>
                <h3>Safety Spectacles</h3>
            </figcaption>
        </section>
        <section>
            <figure>
                <img src={Welding_Goggles} alt="" />
            </figure>
            <figcaption>
                <h3>Welding Safety Goggles</h3>
            </figcaption>
        </section>
        <section>
            <figure>
                <img src={Welding_Sheild} alt="" /> 
            </figure>
            <figcaption>
                <h3>Welding Shield</h3>
            </figcaption>
        </section>
        </article>
    </div>
)
}

export default Face_Protection