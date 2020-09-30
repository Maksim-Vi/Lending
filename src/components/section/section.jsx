import React from "react";
import '../../css/section1.css'
import video from '../../video/Larnitech Office Ukraine.mp4';
import poster from '../../material/youtube.png';
import strelka from '../../material/strelka.png';

const Section = (props) => {
  return (
    <div>
      <section className="section1">
        <div className="container">
          <div className="containerText">
            <div className="MainText">
              <p>
                <span>Larnitech</span> - это
              </p>
              <p>довольство в каждый дом</p>
            </div>
            <div className="MiddleText">
              <p>ОТКРОЙ</p>
              <p>ДЛЯ СЕБЯ</p>
              <p>ЧТО ТО</p>
              <p>БОЛЬШЕ!</p>
              <div className="strelka">
                <img src={strelka} alt="" />
              </div>
            </div>
          </div>

          <div className="mainVideo">
            <video
              controls
              src={video}
              poster={poster}
            ></video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
