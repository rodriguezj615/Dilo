import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImg1 from '../../assets/HeaderSlide1.png';
import CarouselImg2 from '../../assets/HeaderSlide2.png';
import CarouselImg3 from '../../assets/HeaderSlide3.png';
const Hero = ()=>{
    return(
        <section className="section_home">
            <div>
                <Carousel controls={false} className="carousel">
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg1} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">Brindamos una solución<br/>al alcance de todos</h1>
                        <p className="hero__p">Sin conexion alguna o con Internet <br/> en dispositivos nuevos y antiguos.</p>
                        <button className="hero__button">Info</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg2} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">En pro de la inclusion<br/>y la comunicación</h1>
                        <p className="hero__p">Nos enfocamos tanto en las discapacidades <br/> como en la accesibilidad a nuestra app.</p>
                        <button className="hero__button">Info</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg3} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">Posee un menú sencillo<br/>y representativo</h1>
                        <p className="hero__p">Para una mayor comprensión del uso de la app <br/> sin generar inconvenientes al usuario, de rápido aprendizaje.</p>
                        <button className="hero__button">Info</button>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </section>
    )
}
export default Hero;