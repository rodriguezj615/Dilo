import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImg1 from '../../assets/HeaderSlide1.png';
import CarouselImg2 from '../../assets/HeaderSlide2.png';
import CarouselImg3 from '../../assets/HeaderSlide3.png';

const Hero = ()=>{
    return(
        <section className="home__carousel">
            <div>
                <Carousel controls={false} className="carousel">
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg1} alt="First slide"/>
                        <Carousel.Caption>
                            <h1 className="hero__h1">Brindamos una solución <br/>al alcance de todos</h1>
                            <p className="hero__p">Sin conexión alguna con o sin Internet<br/>en dispositivos nuevos y antigüos</p>
                            <button className="hero__button">Info</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg2} alt="First slide"/>
                        <Carousel.Caption>
                            <h1 className="hero__h1">En pro de la inclusión<br/>y la comunicación</h1>
                            <p className="hero__p">Sed ut perspiciatis unde omnis iste natus<br/>error sit voluptatem accusantium doloremque.</p>
                            <button className="hero__button">Info</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg3} alt="First slide"/>
                        <Carousel.Caption>
                            <h1 className="hero__h1">Posee un menú sencillo<br/>y representativo</h1>
                            <p className="hero__p">Sed ut perspiciatis unde omnis iste natus<br/>error sit voluptatem accusantium doloremque.</p>
                            <button className="hero__button">Info</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    )
}

export default Hero;