import React from 'react';
import { Carousel } from 'react-bootstrap';

const Products = ()=>{
  return(
    <section id="products" className="products__section">
      <div className="products__img">
        <Carousel indicators={false} interval={null} fade>
          <Carousel.Item className="product__item1">
            <div>&nbsp;</div>
            <Carousel.Caption className="products__carousel--caption1">
              <h3>Sed ut perspiciatis</h3>
              <h2>Nemo Enim</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="product__item2">
            <div>&nbsp;</div>
            <Carousel.Caption className="products__carousel--caption2">
              <h3>At vero eos et accusam</h3>
              <h2>Sanctus Dolor</h2>
              <p>
                At vero eos et accusam etjusto duo dolores et ea rebum, stet clita kasd gubergren, sea takimata sanctus dolor sit amet.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>  
    </section>
  )
}

export default Products;
