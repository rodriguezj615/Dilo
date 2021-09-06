import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImg from '../../assets/slider-1.png';
const Hero = ()=>{
    return(
        <section className="section_home">
            <div>
                <Carousel className="carousel">
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                        <p className="hero__p">Sed ut perspiciatis unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.</p>
                        <button className="hero__button">Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                        <p className="hero__p">Sed ut perspiciatis unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.</p>
                        <button className="hero__button">Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={CarouselImg} alt="First slide"/>
                        <Carousel.Caption>
                        <h1 className="hero__h1">Sed ut perspiciatis<br/>unde omnis iste natus</h1>
                        <p className="hero__p">Sed ut perspiciatis unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.</p>
                        <button className="hero__button">Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </section>
    )
}
export default Hero;