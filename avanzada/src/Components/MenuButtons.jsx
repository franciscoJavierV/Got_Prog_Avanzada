import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import '../Style/Components/Menu_buttons.css'


const MenuButtons = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
            <div className="menu">
            <div className="menu__title">
                    <h3>Menu</h3>
                </div>
                <div className="menu__buttons">
                
                    <div className="menu__buttons__item">
                    <Link  className="menu__buttons__item-link" to="">Amorios</Link>
                    </div>          
                    <div className="menu__buttons__item">
                    <Link className="menu__buttons__item-link" to="">Dragones</Link>
                    </div>          
                    <div className="menu__buttons__item">
                    <Link  className="menu__buttons__item-link"to="">Subditos</Link>
                    </div>          
                    <div className="menu__buttons__item">
                    <Link className="menu__buttons__item-link" to="">Territorios</Link>
                    </div>          
                    <div className="menu__buttons__item">
                    <Link className="menu__buttons__item-link" to="">Guerreros</Link>
                    </div>                           
                </div>
            </div>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default MenuButtons;