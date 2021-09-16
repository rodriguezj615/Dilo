import React from 'react';
import { Accordion } from 'react-bootstrap';

const Service = ()=>{
   return(
      <section id="service" className="service__flex">
         <div className="service__div">
            <div className="service__acordeon">
               <Accordion defaultActiveKey="0" className="accordion">
                  <Accordion.Item eventKey="0">
                     <Accordion.Header>Sed ut perspiciatis</Accordion.Header>
                     <Accordion.Body>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                     eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                     voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                     kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                     <Accordion.Header>Ut enim ad minima veniam</Accordion.Header>
                     <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                     <Accordion.Header>Sit amet, consectetur, adipisci</Accordion.Header>
                     <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
            </div>
         </div>
         
         <div className="service__img"></div>
      </section>
   )
}

export default Service;