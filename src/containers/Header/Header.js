import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import Toplogo from '../../assets/Dilo.png'
const Header = () =>{
    return(
        <section>
            <div className="header__div">
                <img className="header__img" src={Toplogo} alt="logo 25Watts" />
                <nav className="navbar">
                    <ul>
                        <li><a href="#about">Acerca</a></li>
                        <li><a href="#products">App</a></li>
                        <li><a href="#FAQ">FAQ</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li>
                            <DropdownButton id="dropdown-basic-button" title="Redes">
                            <Dropdown.Item href="#/action-1">Instagram</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Facebook</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Twitter</Dropdown.Item>
                            </DropdownButton>
                        </li>
                    </ul>
                </nav>
            </div>
    </section>
    )
}

export default Header;