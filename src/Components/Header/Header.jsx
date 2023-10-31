import React, { useState } from 'react';
import "../Header/Header.css";
import { Link } from "react-router-dom"

const Header = () => {

    const [ExtendNavbar,setExtendNavbar ] = useState(false)

return (
    <div className='Header' >
        <article>
            <section>
                <Link to='/' className='Navigate' >
                    <h2>Davesafe Limited</h2>
                </Link>
            </section>
            <section>
                <nav id='Navigation' className={ExtendNavbar ? "CloseNavigation" : "OpenNavigation" } onClick={() => setExtendNavbar(false)} >
                    <Link to='/' className='Link' >
                        Home
                    </Link>
                    <Link to='About' className='Link' >
                        About
                    </Link>
                    <Link to='Products' className='Link' >
                        Products
                    </Link>
                    <Link to='Contact' className='Link Information' >
                        Contact
                    </Link>
                </nav>
            </section>
            <section>
                <a href='Contact' className='Button' >
                    <button>Contact Now</button>
                </a>
                <figure onClick={()=> {setExtendNavbar((curr) => !curr)}} >
                        {ExtendNavbar ? <i  id="Bars" class="fa-solid fa-bars"></i> :<i id='Bars' class="fa-solid fa-xmark"></i> }
                </figure>
            </section>
        </article>
    </div>
)
}

export default Header