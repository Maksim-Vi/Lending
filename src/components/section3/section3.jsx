import React from "react";
import Logo from '../../material/logo Larnitech.png';
import "../../css/section4.css";

const Section3 = () => {
  return (
    <div>
      <section className="section4">
        <div className="container">
          <div className="contecst">
            <img
              className="logoText"
              src={Logo}
              alt=""
            />
            <div className="HeaderTextLarnitech">
              <h3>Larnitech от А до Я</h3>
              <p>удивление может біть только приятным!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
