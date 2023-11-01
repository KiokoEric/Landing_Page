import React, { useEffect } from 'react';
import "../Home/Home.css";
import AOS from "aos";
import Head_Gear from "../../Images/Protective_HeadGear.jpg";
import Eye_Protection from "../../Images/Eye_Protection.jpg";
import Ear_Protection from "../../Images/Ear_Protection.jpg";
import Respiratory_Protection from "../../Images/Respiratory_Protection.jpg";
import Hand_Gloves from "../../Images/Protective_HandGloves.jpg";
import Foot_Protection from "../../Images/Foot_Protection.jpg";
import Protective_Clothing from "../../Images/Protective_Clothing.webp";
import { Link } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        AOS.init();
    })

return (
    <div className='Home' >
        <article>
            <h1>Davesafe Limited</h1>
            <h3>Supplier of Personal Protective Equipment in Kenya</h3>
            <p>
            Welcome to Davesafe Limited, your trusted partner in providing high-quality Personal Protective Equipment (PPE) solutions for a safer and healthier living and working environment. We are dedicated to safeguarding lives by offering a comprehensive range of protective gear designed to meet the ever-evolving needs of individuals, businesses and communities.
            </p>
        </article>
        <article>
            <h2>Our Products</h2>
            <section data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="1500" >
                <Link to="/HeadGear" className='Inventory' >
                    <figure>
                        <img src={Head_Gear} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Protective Head Gear</h3>
                        <p>
                        Protective headgear refers to equipment designed to protect the head from various types of injuries and is commonly used in sports, industrial settings, and other activities where there is a risk of head trauma. Protective headgears that we provide are <b>Motorcycle Helmets, Industrial Helmets and Firefighter Helmets.</b> 
                        </p>
                    </figcaption>
                </Link>
                <Link to="/FaceProtection" className='Inventory' >
                    <figure>
                        <img src={Eye_Protection} alt="" /> 
                    </figure>
                    <figcaption>
                        <h3>Eye and Face Protection</h3>
                        <p>
                            Eye and face protection rfers to equipment designed to safeguard the eyes and face from various potential hazards in settings where there is a risk of eye injuries, such as exposure to flying debris, chemical splashes, high-velocity impact, intense light, or harmful radiation. Eye and face protection that we provide are <b>Antimist Goggles, Face Shield, Safety Glasses/ Spectacles, Safety Goggles, Welding Helmet and Welding Safety Goggles.</b> 
                        </p>
                    </figcaption> 
                </Link>
                <Link to="/HearingProtection" className='Inventory' >
                    <figure>
                        <img src={Ear_Protection} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Hearing Protection</h3>
                        <p>
                            Hearing protection refers to equipment designed to reduce or eliminate exposure to excessive noise levels, thereby safeguarding the hearing of individuals who are at risk of noise-induced hearing damage or loss. Hearing Protection devices that we provide are <b>Earplugs and Ear Muffs.</b>
                        </p>
                    </figcaption>
                </Link>
            </section>
            <section data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="1500" >
                <Link to="/RespiratoryProtection" className='Inventory' >
                    <figure>
                        <img src={Respiratory_Protection} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Respiratory Protection</h3>
                        <p>
                            Respiratory protection refers to equipment used to safeguard the respiratory system from exposure to harmful airborne contaminants, particles, gases, vapors, or pathogens. Respiratory protection devices we provide are <b>Disposable Dustmasks, 3M Half Face Respiratory Mask and 3M Full Face Respiratory Mask.</b> 
                        </p>
                    </figcaption>
                </Link>
                <Link to="/HandGloves" className='Inventory' >
                    <figure>
                        <img src={Hand_Gloves} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Protective Hand Gloves</h3>
                        <p>
                            Protective hand gloves are specialized gloves designed to protect the hands from various hazards including physical injuries, chemicals, extreme temperatures, and biological agents. Protective hand gloves that we provide are <b>Canvas Gloves, Cold Room Gloves, Cotton Hand Gloves, Cut Resistant Gloves, Diamond Grip Work Gloves, Latex Gloves, Leather Gloves, Nitrile Gloves, PVC Gloves, Rider Hand Gloves and Welding Gloves. </b> 
                        </p>
                    </figcaption>
                </Link>
                <Link to="/FootWear" className='Inventory' >
                    <figure>
                        <img src={Foot_Protection} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Protective Foot Wear</h3>
                        <p>
                            Protective footwear, also known as safety footwear or work boots, are footwear to protect the feet from various workplace hazards and injuries. Protective Footwear that we provide are <b>Gum Boots, Safety Shoes, Security Boots and Steel-Toed Boots.</b>
                        </p>
                    </figcaption>
                </Link>
            </section>
            <section data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="1500" >
                <Link to="/ProtectiveClothing" className='Inventory' >
                    <figure>
                        <img src={Protective_Clothing} alt="" />
                    </figure>
                    <figcaption>
                        <h3>Personal Protective Clothing</h3>
                        <p>
                            Personal protective clothing refers to apparel designed to protect individuals from various workplace hazards and risks. Personal protective clothing that we provide are <b> Aprons, Chef Uniform, Dust Coats, Dungarees, Eskimo Suits, Kaunda Suits, Overalls, PVC Aprons, Rain Coats, Rider Suits, Security Guard Uniform and Spray Suits. </b>
                        </p>
                    </figcaption>
                </Link>
            </section>
        </article>
    </div>
)
}

export default Home