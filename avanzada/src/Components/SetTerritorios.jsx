import React from 'react'
import TerritoriosCarrousel from './TerritoriosCarrousel.jsx'
import '../Style/Pages/SetTerritorios.css'
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router-dom'
const SetTerritorios = () => {
    return(
        <React.Fragment>
        
           <Header/>
            <div className="carrusel">
            <TerritoriosCarrousel></TerritoriosCarrousel> 
            <div className="goBack">
            <Link to=''>  Go Back</Link>
          </div>
           </div>
          
           <Footer/>
        </React.Fragment>
    )
}
export default SetTerritorios