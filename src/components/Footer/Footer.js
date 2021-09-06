import React from 'react'
import Logo from '../../assets/footer-logo.svg'

const Footer = () => {
    return (
        <section className="footer flex">
        <div className="footer__text">
            <p>2020 © All rights reserved.</p>
        </div>
        <div className="footer__logo">
            <img src={Logo} alt="footer"/>
        </div>
        </section>
    )
}

export default Footer;