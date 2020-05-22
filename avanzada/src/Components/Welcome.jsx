import React from 'react'
import Logot from '../Images/pechocho-2.png'
import '../Style/Components/Welcome.css'
const Welcome = () => {
    return(
        <div className="container">
            <div className="container__image">
                <img className="container__image-img" src={Logot} alt="Logo"/>
            </div>
            <div className="container__article">
                <p className="container__article-article">
                    hi i´m  a page 
                </p>
            </div>
        </div>
        
    )
}
export default Welcome;