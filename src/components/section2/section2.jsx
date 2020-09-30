import React from "react";
import "../../css/section3.css"
import Phone from '../../material/iphone-larnitech2.png';

const Section2 = () => {
  return (
    <div>
      <section className="section3">
        <div className="container">
          <div className="topText">
            <h3>Возможности сегодня</h3>
            <p>
              на сегоднешний день, <span>Larnitech</span> - нечто больше чем
              просто система умный дом, это друг, который попадает в вашу жизнь,
              без которого вам потом не обойтись!
            </p>
            <p className="bottomText">
              как он выглядит и что из себя представляет, чем может похвастаться
              и как может удевить?
            </p>
          </div>
          <div className="content">
            <img src={Phone} alt="" />
            <div className="contentText">
              <div className="function">
                <h4 className="caption">функционал</h4>
                <p>свет, климат, музыка...</p>
                <p>самое необходимое рядом:</p>
              </div>

              <div className="spicking">
                <div className="caption">
                  <h4>голосовое управление</h4>
                </div>
                <p>алекса, алиса, сири, гугл,</p>
                <p>если не с кем поговорить</p>
                <p>умный дом в этом поможет!</p>
              </div>

              <div className="timetables">
                <h4 className="caption">расписания</h4>
                <p>настрой систему под себя</p>
                <p>вместе с расписаниями!</p>
              </div>

              <div className="scene">
                <div className="caption">
                  <h4>разного</h4>
                  <h4>типа сценарии</h4>
                </div>
                <p>вечеринка, кино, или релакс</p>
                <p>настрой сценарии на свой вкус!</p>
              </div>
              <div className="localCloud">
                <div className="caption">
                  <h4>удаленно</h4>
                  <h4>локально</h4>
                </div>
                <p>контролируй</p>
                <p>свой дом удобно</p>
              </div>
              <div className="sec">
                <div className="caption">
                  <h4>безопасность,</h4>
                  <h4>уведомления,графики</h4>
                </div>
                <p>если что то случилось - push</p>
                <p>всегда сообщит о проблеме</p>
              </div>

              <div className="bottomContentBtn">
                <p>а так же многое другое!</p>
                <div className="btnConsultation">
                  <a >получить консультацию</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
