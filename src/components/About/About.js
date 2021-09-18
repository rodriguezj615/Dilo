import React from 'react';

const About = () => {
    return(
        <section id="Acerca" className="flex about__section">
            <div className="about__decoration">&nbsp;</div>
            <div className="about__container">
                <div>
                    <span className="about__title1">Seamos todo...
                    <p className="about__title2">Todos Juntos!</p>
                    </span>
                </div>
                <div className="about__text">
                    {/* Ajustar el contenedor sin br */}
                    <p>La idea se basa en realizar un sitio web de carácter inclusivo para personas con deficiencia en el habla,<br/>
                        incapacidad para la escritura y lectura, agilizando la comunicación a través de tecnologías para facilitar<br/>
                        la comprensión y comunicación de necesidades básicas y complejas. Más allá del rango etario que podría <br/>
                        incluirse en este proyecto, también fue pensado en pro de un requisito elemental que nos comprende como<br/>
                        seres humanos, la comunicación. Se pretende abarcar distintas discapacidades, o por lo menos alcanzar <br/>
                        la mayor cantidad posible para que el proyecto realmente valga la pena. Como fue mencionado anteriormente, <br/>
                        el objetivo a cumplir es resolver y facilitar la comunicación en una rápida comprensión entre el usuario, <br/>
                        mediante el uso del software, y el receptor el cual interpreta el mensaje a través de una respuesta representada <br/>
                        de manera gráfica o auditiva proveniente de la plataforma. Por otra parte, el abanico de opciones dentro de <br/>
                        la UI promete cubrir necesidades tales como la alimentación, la higiene, el ocio y la salud entre otros siendo <br/>
                        este último mucho más complejo para usuarios con edad adulta. Con estos objetivos en claro, el grupo de trabajo<br/>
                        planteó realizarlo de la manera más gráfica y sencilla posible, ofreciendo un entorno agradable en el cual <br/>
                        interactuar y desplazarse, de manera ágil y efectiva. <br/>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;