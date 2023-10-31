import React, { useEffect } from 'react';
import AOS from "aos";
import "../Products/Products.css";
import { Link } from "react-router-dom"
import Head_Gear from "../../Images/Protective_HeadGear.jpg";
import Eye_Protection from "../../Images/Eye_Protection.jpg";
import Ear_Protection from "../../Images/Ear_Protection.jpg";
import Respiratory_Protection from "../../Images/Respiratory_Protection.jpg";
import Hand_Gloves from "../../Images/Protective_HandGloves.jpg";
import Foot_Protection from "../../Images/Foot_Protection.jpg";
import Protective_Clothing from "../../Images/Protective_Clothing.webp";

const Products = () => {

    useEffect(() => {
        AOS.init();
    })

return (
    <div className='Products' >
        <article>
            <h1>Our Products</h1>
        </article>
        <article>
        <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                <Link to="/HeadGear" className='Product' >
                    <figure>
                        <img src={Head_Gear} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Protective Head Gear</h3>
                    </figcaption>
                </Link>
                <Link to="/FaceProtection" className='Product'  >
                    <figure>
                        <img src={Eye_Protection} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Eye and Face Protection</h3>
                    </figcaption>
                </Link>
                <Link to="/HearingProtection" className='Product'  >
                    <figure>
                        <img src={Ear_Protection} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Hearing Protection</h3>
                    </figcaption>
                </Link>
            </section>
            <section data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500" >
                <Link to="/RespiratoryProtection" className='Product'  >
                    <figure>
                        <img src={Respiratory_Protection} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Respiratory Protection</h3>
                    </figcaption>
                </Link>
                <Link to="/HandGloves" className='Product'  >
                    <figure>
                        <img src={Hand_Gloves} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Protective Hand Gloves</h3>
                    </figcaption>
                </Link>
                <Link to="/FootWear" className='Product'  >
                    <figure>
                        <img src={Foot_Protection} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Protective Foot Wear</h3>  
                    </figcaption>
                </Link>
            </section>
            <section data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" >
                <Link to="/ProtectiveClothing" className='Product'  >
                    <figure>
                        <img src={Protective_Clothing} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Protective Clothing</h3>
                    </figcaption>
                </Link> 
            </section>
        </article>
    </div>
)
}

export default Products