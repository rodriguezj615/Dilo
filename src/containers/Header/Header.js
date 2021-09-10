import React from 'react';
import Toplogo from '../../assets/headerlogo.svg'
const Header = () =>{
    return(
        <section>
            <div className="header__div">
                <img className="header__img" src={Toplogo} alt="logo 25Watts" />
                <nav className="navbar">
                    <ul>
                        <li><a href="#inicio">Redes</a></li>
                        <li><a href="#about">Acerca</a></li>
                        <li><a href="#products">App</a></li>
                        <li><a href="#FAQ">FAQ</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </div>
    </section>
    )
}

export default Header;