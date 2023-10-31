import React from 'react';
import "./Footer.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
return (    
    <div className='Footer' > 
        <article>
            <section>
                <figure>
                    <AiTwotoneMail size="1.5rem" className='Icon' />
                    <figcaption>
                        <p>
                            Email: info@davesafeltd.com | davesafeltd@gmail.com
                        </p>
                    </figcaption>
                </figure>
            </section>
            <section> 
                <figure>
                    <BsFillTelephoneOutboundFill size="1.5rem" className='Icon' />
                    <figcaption>
                        <p>
                            Call: 0112 570 607
                        </p>
                    </figcaption>
                </figure>
            </section>
        </article> 
    </div>
)
}

export default Footer