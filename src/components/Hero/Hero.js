import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImg from '../../assets/headerslider.png';

const Hero = ()=>{
    return(
        <section className="section_home">
            <div>
                <Carousel controls={false} className="carousel">
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">Sed ut perspiciatis <br/>unde omnis iste natus</h1>
                        <p className="hero__p">Sed ut perspiciatis unde omnis iste natus<br/>error sit voluptatem accusantium doloremque.</p>
                        <button className="hero__button">Info</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">Sed ut perspiciatis <br/>unde omnis iste natus</h1>
                        <p className="hero__p">Sed ut perspiciatis unde omnis iste natus<br/>error sit voluptatem accusantium doloremque.</p>
                        <button className="hero__button">Info</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">Sed ut perspiciatis <br/>unde omnis iste natus</h1>
                        <p className="hero__p">Sed ut perspiciatis unde omnis iste natus<br/>error sit voluptatem accusantium doloremque.</p>
                        <button className="hero__button">Read me</button>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </section>
    )
}
export default Hero;