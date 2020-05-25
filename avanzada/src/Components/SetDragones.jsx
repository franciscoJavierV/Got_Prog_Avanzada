import React from 'react'
import DragonCarrousel from './DragonCarrousel'
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router-dom'

class SetDragones extends React.Component {
    render(){
    return(
        <React.Fragment>        
           <Header/>
            <div className="carrusel">
            <DragonCarrousel />
           </div>
           <div className="goBack">
            <Link to=''>  Go Back</Link>
          </div>
           <Footer/>
        </React.Fragment>
    )
    }
}
export default SetDragones;