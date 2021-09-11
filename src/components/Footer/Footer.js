import React from 'react'
import Logo from '../../assets/footerlogo.svg'

const Footer = () => {
    return (
        <section className="footer flex">
        <div className="footer__text">
            <p>2020 © All rights reserved.</p>
        </div>
        <div className="footer__img">
            <img src={Logo} />
        </div>
        </section>
    )
}

export default Footer;