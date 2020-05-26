import React from "react";
import Logot from "../Images/pechocho-2.png";
import "../Style/Components/Welcome.css";
const Welcome = () => {
  return (
    <div className="welcome__container">
      <div className="welcome__container__image">
        <img className="welcome__container__image-img" src={Logot} alt="Logo" />
      </div>
      <div className="welcome__container__article">
        <h1>welcome</h1>
        <p className="welcome__container__article-article">Proyecto de tercer corte de programacion avanzada</p>
      </div>
    </div>
  );
};
export default Welcome;
