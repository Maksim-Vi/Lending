import React from "react";
import "../../css/section5.css";
import { Carousel } from "react-bootstrap";
import image1 from '../../material/carusel1picture.png';
import image2 from '../../material/carusel2picture.png';
import image3 from '../../material/carusel3picture.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const Section4 = () => {
  return (
    <div>
      <section className="section5 parallaxLayerBack">
        <div className="container">
          <div className="slideshow-container">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="Оборудование"
                />
                <Carousel.Caption>
                    <div>
                        <h3 className="text">Оборудование</h3>
                    <p className="textDesc">Metaforsa 1</p>
                    </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Оборудование"
                />

                <Carousel.Caption>
                    <div>
                        <h3 className="text">Оборудование</h3>
                        <p>Metaforsa 2</p>
                    </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image3}
                  alt="Коробочное решение"
                />

                <Carousel.Caption>
                    <div>
                        <h3 className="text">Коробочное решение</h3>
                        <p>Metaforsa 2</p>
                    </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
