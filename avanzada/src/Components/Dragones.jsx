import React from 'react';
import '../Style/Components/Dragones.css'


class  Dragones extends React.Component {
  
    
    render(){
        return(
            <div className="dragones__container">                         
                <div className="dagrones__container-img">
                    <img className="dagrones__container-img-img" src={this.props.imagen} alt="imagen"/>
                </div>
                <div className="dragones__info">
                    <p>name = {this.props.name}</p>
                    <p>edad = {this.props.edad}</p>
                    <p>color = {this.props.color}</p>
                    <p>fuerza = {this.props.fuerza}</p>
                    <p>personas comidas = {this.props.comidas}</p>
                    <p>comida favorita  = {this.props.comida}</p>
                </div>

                
            </div>

            
        )
    }
}

  export default Dragones