import React from "react";
import "../Style/Components/TerritoriosCarrousel.css";
import storm from "../Images/Stormsend.jpg";
import summer from "../Images/Summerhall.jpg";
import  dragon from "../Images/Dragonstone.jpg";
import  Territorios from "./Territorios";

const summerhall = {
  name: "Summerhall",
  clima: "Calido",
  productos: 'Ninguno',
  subditos: "Ninguno",
};
const dragonstone = {
  name: "Gragonstone",
  clima: "Lluvioso",
  productos: 'Pescado',
  subditos: "Propio",
};

const stormsend = {
  name: "Stormsend",
  clima: "Lluvioso",
  productos:'Ganaderia ',
  subditos: "Barateon",
};
const TerritoriosCarrousel = () => (
  <div className="territorios__carousel">
    <div className="territorios__carousel__item">
      <div className="territorios1">
        <Territorios
          imagen={summer}
          name={summerhall.name}
          clima={summerhall.clima}
          productos={summerhall.productos}
          subditos={summerhall.subditos}
     
        />
      </div>
      <div className="territorios2">
        <Territorios
          imagen={dragon}
          name={dragonstone.name}
          clima={dragonstone.clima}
          productos={dragonstone.productos}
          subditos={dragonstone.subditos}
             />
      </div>
      <div className="territorios3">
        <Territorios
          imagen={storm}
          name={stormsend.name}
          clima={stormsend.clima}
          productos={stormsend.productos}
          subditos={stormsend.subditos}
             />
      </div>
    </div>
  </div>
);

export default TerritoriosCarrousel;
