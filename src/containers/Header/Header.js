import React from 'react';
import Toplogo from '../../assets/headerlogo.svg'
const Header = () =>{
    return(
        <section>
            <div className="header__div">
                <img className="header__img" src={Toplogo} alt="logo 25Watts" />
                <nav className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
    </section>
    )
}

export default Header;