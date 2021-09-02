import React from 'react';
import Logo from '../../assets/top-logo.svg'
const Header = () =>{
    return(
        <section className="header__index">
            <div className="flex header--div1">
                <img className="header__img header__container" src={Logo} alt="25Watts"/>
                <nav className="header__ul">
                    <ul className="flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <hr className="header__hr"/>
            <div>
                <h1 className="header__h1 header__container">Sed ut perspiciatis <br/>unde omnis iste natus</h1>
            </div>
            <div>
                <h2 className="header__h2 header__container">Sed ut perspiciatis unde omnis iste natus error <br/>sit voluptatem accusantium doloremque.</h2>
            </div>
            <div>
                <button className="header__button header__container">Read More</button>
            </div>
        </section>
    )
}

export default Header;