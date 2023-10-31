import React from 'react';
import "../Hand_Gloves/Hand_Gloves.css";
import Canvas_Gloves from "../../../Images/Canvas_Gloves.webp";
import Cotton_Gloves from "../../../Images/Cotton_Hand_Gloves.jpg";
import Cut_Resistant_Gloves from "../../../Images/Cut_Resistant_Gloves.jpg";
import Diamond_Gloves from "../../../Images/Diamond_Gloves.jpg";
import Latex_Gloves from "../../../Images/Latex_Gloves.webp";
import Leather_Gloves from "../../../Images/Leather_Gloves.webp";
import Nitrile_Gloves from "../../../Images/Nitrile_Gloves.webp";
import PVC_Gloves from "../../../Images/Red_PVC_Gloves.jpg";
import Welding_Gloves from "../../../Images/Welding_Gloves.jpg";

const Hand_Gloves = () => {
return (
    <div className='Gloves' >
        <article>
            <h1>Protective Hand Gloves</h1>
        </article>
        <article>
            <section>
                <figure>
                    <img src={Canvas_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>Canvas Gloves</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Cotton_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>Cotton Hand Gloves</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Cut_Resistant_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>Cut Resistant Gloves</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Diamond_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>Diamond Grip Work Gloves</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Latex_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>Latex Gloves</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Leather_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>Leather Gloves</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Nitrile_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>Nitrile Gloves</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={PVC_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>PVC Gloves</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Welding_Gloves} alt="" />
                </figure>
                <figcaption>
                    <h3>Welding Gloves</h3>
                </figcaption>
            </section>
        </article>
    </div>
)
}

export default Hand_Gloves