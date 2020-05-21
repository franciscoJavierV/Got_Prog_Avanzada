import React from "react"
import '../Style/Components/Header.css'
import Logo from '../Images/Logo.jpg'
import Logout from '../Images/logout.png'

const Header = () => {
    return (
        <React.Fragment>
            <div className="header"> 
                <img className="header__logo" src={Logo} alt="Icon"/>
                <h1>Programacion avanzada</h1>
                <img className= "header__logout" src={Logout} alt="Log out icon"/>
            </div>
        </React.Fragment>
    )
}
export default Header;