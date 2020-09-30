import React from "react";
import '../../css/section2.css'
import plus from '../../material/plus.png';
import light from '../../material/light.png';
import audio from '../../material/audio.png';
import heat from '../../material/heat.png';
import sec from '../../material/sec.png';
import Shape from '../../material/Shape.png';


const Section1 = () => {
  return (
    <div>
      <section className="section2 parallaxLayerBack">
        <div className="container">
          <h3>ПРЕИМУЩЕСТВА СИСТЕМЫ</h3>
          <div className="Shape">
            <div className="blockFirst">
              <div className="light">
                <a href="">
                  <img className="plus" src={plus} alt="" />
                  <div className="ShapeText">
                    <p>Управляйте</p>
                    <p>освещением</p>
                  </div>
                  <img src={light} alt="" />
                </a>
              </div>
              <div className="audio">
                <a href="">
                  <img className="plus" src={plus} alt="" />
                  <div className="ShapeText">
                    <p>Управляйте</p>
                    <p>мультимедиа</p>
                  </div>
                  <img src={audio} alt="" />
                </a>
              </div>
            </div>
            <img src={Shape} alt="" />
            <div className="blockSecond">
              <div className="climate">
                <a href="">
                  <img src={heat} alt="" />
                  <div className="ShapeText">
                    <p>Управление</p>
                    <p>климатом</p>
                  </div>
                  <img className="plus" src={plus} alt="" />
                </a>
              </div>
              <div className="security">
                <a href="">
                  <img src={sec} alt="" />
                  <div className="ShapeText">
                    <p>Управление</p>
                    <p>безопасностью</p>
                  </div>
                  <img className="plus" src={plus} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
