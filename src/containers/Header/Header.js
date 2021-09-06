import React from 'react';
import Toplogo from '../../assets/top-logo.svg'
const Header = () =>{
    return(
        <section className="header__div">
            <div className="header__div">
            <img className="header__img" src={Toplogo} alt="logo 25Watts" />
            <nav className="navbar">
                <ul>
                    <li><a href="#inicio">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        <hr className="header__hr" />
    </section>
    )
}

export default Header;