import React from "react";
import '../../css/css.css'
import logo from '../../material/logo Larnitech.png';

const Header = () => {
  return (
    <div>
      <header id="header" className="header parallaxLayerBack">
        <div className="container">
          <div className="contextTop">
            <img src={logo} alt="" className="logo" />
            <div className="number">
              <p>заказать прямо сейчас</p>
              <p className="phoneNumber">+380(96)-234-67-77</p>
            </div>
            <a href="" className="btnTop">
              перезвонить мне
            </a>
          </div>
          <div className="contextMiddle">
            <p>Умный дом</p>
            <p className="TextMiddle">Живи в комфорте, вместе с</p>
            <p className="TextLarnitech">Larnitech</p>
          </div>
          <div className="contextBottom">
            <a href="" className="btnDiscover">
              Узнать больше
            </a>
            <p>Оставь свою заявку!</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header
