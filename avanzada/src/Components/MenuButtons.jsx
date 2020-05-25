import React from "react";
import { Link } from "react-router-dom";

import "../Style/Components/Menu_buttons.css";

const MenuButtons = () => {
  return (
    <React.Fragment>
      <div className="menu">
        <div className="menu__title">
          <h3>Menu</h3>
        </div>
        <div className="menu__buttons">
          <div className="menu__buttons__item">
            <Link className="menu__buttons__item-link" to="/Amorios">
              Amorios
            </Link>
          </div>
          <div className="menu__buttons__item">
            <Link className="menu__buttons__item-link" to="/Dragones">
              Dragones
            </Link>
          </div>
          <div className="menu__buttons__item">
            <Link className="menu__buttons__item-link" to="/Subditos">
              Subditos
            </Link>
          </div>
          <div className="menu__buttons__item">
            <Link className="menu__buttons__item-link" to="/Territorios">
              Territorios
            </Link>
          </div>
          <div className="menu__buttons__item">
            <Link className="menu__buttons__item-link" to="/Guerreros">
              Guerreros
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MenuButtons;
