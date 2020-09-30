import React from 'react';
import '../../css/footer.css';
import logoFooter from '../../material/logo Larnitech.png';
import youtubeSocial from '../../material/youtubeSocial.png';
import instagram from '../../material/instagram.png';
import facebook from '../../material/facebook.png';

const Footer = () =>{
    return (<footer id="footer" className="footer">
      <div className="container">
        <div className="contentFooter">
        <img className="logoFooter" src={logoFooter} alt="" />
                <div className="info">
                    <p> +38 099 477 22 58</p>
                    <p>e-mail: info@larnitech.com </p>
                </div>
                <div className="partners">
                    <h4>Партнеры</h4>
                    <a href="http://wiki.larnitech.com/ru/" target="_blank">Wiki larnitech</a>
                    <a href="https://www.larnitech.com/" target="_blank">larnirech.com</a>
                    <a href="https://metaforsa.com.ua/" target="_blank">larnirech.ua</a>
                    <a href="https://ru.larnitech.com/" target="_blank">larnirech.ru</a>
                </div>
                <div className="social">
                    <img src={youtubeSocial} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={facebook} alt=""/>                    
                </div>
        </div>
      </div>
  </footer>)
}

export default Footer