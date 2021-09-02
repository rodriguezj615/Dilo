import React from 'react';

const Products = ()=>{
    return(
        <section class="products__background1">
            <div class="products__background2">
                <div class="products__img">
                    <div class="products__textbox">
                        <div>
                            <p class="products__textbox--p1">Sed ut perspiciatis</p>
                            <p class="products__textbox--p2">Nemo Enim</p>
                            <p class="products__textbox--p3">
                                Sed ut perspiciatis unde omnis iste natus error sit <br/>
                                voluptatem accusantium doloremque laudantium, <br/>
                                totam rem aperiam.
                            </p>
                        </div>
                        <div class="products__textbox--arrow">
                            <img src="./assets/Icon feather-arrow-left-circle.svg" alt=""/>
                            <img src="./assets/Icon feather-arrow-right-circle.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;
