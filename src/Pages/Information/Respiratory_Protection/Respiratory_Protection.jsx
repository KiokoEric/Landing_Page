import React from 'react';
import "../Respiratory_Protection/Respiratory_Protection.css";
import Dust_Masks from "../../../Images/Dust_Mask.jpg";
import Half_Face_Mask from "../../../Images/3M_Half-Face_Mask.webp";
import Full_Face_Mask from "../../../Images/Full_Face_Respiratory_Mask.jpg";

const Respiratory_Protection = () => {
return (
    <div className='Respiratory' >
        <article>
            <h1>Respiratory Protection</h1>
        </article>
        <article>
            <section>
                <figure>
                    <img src={Dust_Masks} alt="" />
                </figure>
                <figcaption>
                    <h3>Dust Masks</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Half_Face_Mask} alt="" />
                </figure>
                <figcaption>
                    <h3>3M Half Face Respiratory Mask</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Full_Face_Mask} alt="" />
                </figure>
                <figcaption>
                    <h3>3M Full Face Respiratory Mask</h3>
                </figcaption>
            </section>
        </article>
    </div>
)
}

export default Respiratory_Protection