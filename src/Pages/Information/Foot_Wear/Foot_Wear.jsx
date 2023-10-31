import React from 'react';
import "../Foot_Wear/Foot_Wear.css";
import Gum_Boots from "../../../Images/Gum_Boots.webp";
import Safety_Shoes from "../../../Images/Safety_Shoes.jpg";
import Safety_Boots from "../../../Images/Safety_Boots.jpg";
import Security_Boots from "../../../Images/Security_Boots.jpg";

const Foot_Wear = () => {
return (
    <div className='FootWear' >
        <article>
            <h1>Protective Foot Wear</h1>
        </article>
        <article>
            <section>
                <figure>
                    <img src={Gum_Boots} alt="" />
                </figure>
                <figcaption>
                    <h3>Gum Boots</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Safety_Shoes} alt="" />
                </figure>
                <figcaption>
                    <h3>Safety Shoes</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Safety_Boots} alt="" />
                </figure>
                <figcaption>
                    <h3>Safety Boots</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Security_Boots} alt="" />
                </figure>
                <figcaption>
                    <h3>Security Boots</h3>
                </figcaption>
            </section>
        </article>
    </div>
)
}

export default Foot_Wear