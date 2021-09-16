import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = ()=>{
    return(
        <section id="FAQ" className="service__flex">
            <div className="service__div">
               <div className="service__acordeon">
                  <Accordion defaultActiveKey="0" className="accordion">
                     <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Quienes somos?</Accordion.Header>
                        <Accordion.Body>
                        Somos un grupo de estudiantes de la carrera de desarrollo de software del Terciario Urquiza en Rosario,
                        interesados en ofrecer una alternativa de comunicación para quienes se encuentren con dificultades a la
                        hora de expresar las necesidades mas importantes de su vida cotidiana.
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                        <Accordion.Header>¿Que es DILO! y cuál es el objetivo del proyecto?</Accordion.Header>
                        <Accordion.Body>
                        DILO! es un sistema de comunicacion aumentativo y alternativo, que permite la interpretación y/o 
                        comunicacion a traves de una interfaz visual y auditiva, ayudando así a una mayor inclusión.
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="2">
                        <Accordion.Header>¿A quién va dirigido el proyecto?</Accordion.Header>
                        <Accordion.Body>
                        El proyecto va dirigido a todas aquellas personas, tanto niños como adultos, 
                        cuya comunicación se vea dificultada.
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="3">
                        <Accordion.Header>¿Tiene algun costo?</Accordion.Header>
                        <Accordion.Body>
                           Ninguno, es gratuito para toda persona que pueda llegar a necesitarlo.
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="4">
                        <Accordion.Header>¿Por dónde se puede acceder a DILO!?</Accordion.Header>
                        <Accordion.Body>
                        DILO! puede ser accedido tanto por cualquier dispositivo con conexion a internet a través de su
                        página web, o bien por la app especializada que se encuentra disponible y que no requiere conexión
                        a internet
                        </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="5">
                        <Accordion.Header>¿Es necesario registrarse?</Accordion.Header>
                        <Accordion.Body>
                        No. No es necesario registrarse, sin embargo permitimos la opcion de registro para que automaticamente
                        muestre la interfaz de adultos o niños, personalizando la experiencia del usuario.
                        </Accordion.Body>
                     </Accordion.Item>
                  </Accordion>
               </div>
            </div>
            
            <div className="service__img"></div>
        </section>
    )
}

export default FAQ;