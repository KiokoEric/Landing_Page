import React from 'react';
import "../Protective_Clothing/Protective_Clothing.css";
import Dust_Coat from "../../../Images/Dust_Coats.png";
import Eskimo_Suit from "../../../Images/Eskimo_Suit.jpg";
import Overall from "../../../Images/Overalls.jpg";
import PVC_Apron from "../../../Images/PVC_Apron.webp";
import Rain_Coat from "../../../Images/Rain_Coat.jpg";
import Spray_Suit from "../../../Images/Spray_Suit.webp";

const Protective_Clothing = () => {
return (
    <div className='Clothing' >
        <article>
            <h1>Protective Clothing</h1>
        </article>
        <article>
            <section>
                <figure>
                    <img src={Dust_Coat} alt="" />
                </figure>
                <figcaption>
                    <h3>Dust Coats</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Eskimo_Suit} alt="" />
                </figure>
                <figcaption>
                    <h3>Eskimo Suit</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Overall} alt="" />
                </figure>
                <figcaption>
                    <h3>Overalls</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={PVC_Apron} alt="" />
                </figure>
                <figcaption>
                    <h3>PVC Apron</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Rain_Coat} alt="" />
                </figure>
                <figcaption>
                    <h3>Rain Coat</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Spray_Suit} alt="" />
                </figure>
                <figcaption>
                    <h3>Spray Suit</h3>
                </figcaption>
            </section>
        </article>
    </div>
)
}

export default Protective_Clothing