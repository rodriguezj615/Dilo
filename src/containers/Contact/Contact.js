import React, { useState } from 'react';
import {Container , Row, Col, Form, Alert} from "react-bootstrap";
import { sendForm } from '../../axios';
import ContactImg from '../../assets/contact-image.png';


const Contact = () =>{

    const [validated, setValidated] = useState(false)
    const [error, setError] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [dataForm, setDataForm] = useState({})

    const handlerChange = (e)=>{
        setDataForm((prevData)=>{
            return{
                ...prevData,
                [e.target.name] : e.target.value
            }
        })
    }

    const handlerSubmit = async (e)=>{
        
        e.preventDefault()
        const form = e.currentTarget
        setValidated(true);
        
        if (form.checkValidity() === false) {
            setError(true);
            setShowAlert(true);
        } else {
            const response = await sendForm(dataForm);
            if (response.status ===201) {
                setError(false);
                setShowAlert(true);
                form.reset();
                setValidated(false);
                setTimeout(()=>{
                    setShowAlert(false);
                }, 3000);
            }
        }
    }

    return (
        <section id="contact" className="contact__background">
            <div className="contact__div1">
                <h3>
                    <span className="contact__title1">Get in touch</span>
                    <span className="contact__title2">We are hiring!</span>
                </h3>
                <div>
                <Container className="contact__form">
                    <Row>
                        <Col md={12} lg={5}>
                            <Form noValidate validated={validated} onSubmit={(e)=>handlerSubmit(e)}>
                                <Form.Group
                                //controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control onChange={(e)=>handlerChange(e)} required type="text" placeholder="Name" name="name"/>
                                </Form.Group>

                                <Form.Group
                                //controlId="exampleForm.ControlInput2"
                                >
                                    <Form.Control onChange={(e)=>handlerChange(e)} required type="email" placeholder="Email" name="email"/>
                                </Form.Group>

                                <Form.Group
                                //controlId="exampleForm.ControlInput3"
                                >
                                    <Form.Control onChange={(e)=>handlerChange(e)} type="phone" placeholder="Phone" name="phone"/>
                                </Form.Group>

                                <Form.Group 
                                //controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Control onChange={(e)=>handlerChange(e)} required as="textarea" rows={4} placeholder="Message" name="message"/>
                                </Form.Group>

                                {showAlert ? ( 
                                    !error ? ( 
                                        <Alert variant='success'> Enviado con exito! </Alert>
                                        ):(  
                                            <Alert variant='danger'> Error en el envio</Alert>
                                            )
                                            ): null    
                                        }

                                <button className="contact__button" type="submit">Send</button>
                            </Form>
                            <br/>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
            <img className="contact__img" alt="contact imagen" src={ContactImg} />
        </section>
    )
}

export default Contact;