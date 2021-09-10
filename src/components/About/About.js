import React from 'react';



const About = () => {
    return(
        <section id="about" className="flex about__section">
            <div className="decoration__about">&nbsp;</div>
            <div className="about__container">
                <div>
                    <span className="title__about1">Seamos todo...
                    <p className="title__about2">Todos juntos!</p></span>
                </div>
                <div className="text__about">
                    <p>La idea se basó en realizar una app de carácter inclusivo para personas con deficiencia en el habla,<br/>
                        incapacidad para la escritura y lectura, agilizando la comunicación a través de tecnologías para facilitar <br/>
                        la comprensión y comunicación de necesidades básicas y complejas. Más allá del rango etario que podría <br/>
                        incluirse en este proyecto, también fue pensado en pro de un requisito elemental que nos comprende como <br/>
                        seres humanos, la comunicación. Se pretende abarcar distintas discapacidades, o por lo menos alcanzar <br/>
                        la mayor cantidad posible para que el proyecto realmente valga la pena. Como fue mencionado anteriormente,<br/>
                        el objetivo a cumplir es resolver y facilitar la comunicación en una rápida comprensión entre el usuario,<br/>
                        mediante el uso del software, y el receptor el cual interpreta el mensaje a través de una respuesta<br/>
                        representada de manera gráfica o auditiva proveniente de la plataforma. Por otra parte, el abanico<br/>
                        de opciones dentro de la UI promete cubrir necesidades tales como la alimentación, la higiene,<br/>
                        el ocio y la salud entre otros siendo este último mucho más complejo para usuarios con edad adulta.<br/>
                        Con estos objetivos en claro, el grupo de trabajo planteó realizarlo de la manera más gráfica y sencilla<br/>
                        posible, ofreciendo un entorno agradable en el cual interactuar y desplazarse, de manera ágil y efectiva.
                    </p>
                </div>
            </div>
        </section>
    )
}



export default About;