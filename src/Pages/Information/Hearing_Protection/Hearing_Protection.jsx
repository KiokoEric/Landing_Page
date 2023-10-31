import React from 'react';
import "../Hearing_Protection/Hearing_Protection.css";
import Ear_Plugs from "../../../Images/Ear_Plugs.webp";
import Ear_Muffs from "../../../Images/Ear_Muffs.jpg";


const Hearing_Protection = () => {
return (
    <div className='Hearing'>
        <article>
            <h1>Hearing Protection</h1>
        </article>
        <article>
            <section>
                <figure>
                    <img src={Ear_Muffs} alt="" />
                </figure>
                <figcaption>
                    <h3>Ear Muffs</h3>
                </figcaption>
            </section>
            <section>
                <figure>
                    <img src={Ear_Plugs} alt="" />
                </figure>
                <figcaption>
                    <h3>Ear Plugs</h3>
                </figcaption>
            </section>
        </article>
    </div>
)
}   

export default Hearing_Protection