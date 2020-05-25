import React, {Component} from 'react';
import '../Style/Components/Territorios.css'


class  Territorios extends Component {   
    render(){
        return(
            <div className="territorios__container">                         
                <div className="territorios__container-img">
                    <img className="territorios__container-img-img" src={this.props.imagen} alt="imagen"/>
                </div>
                <div className="territorios__info">
                   <p> Territorios= {this.props.name}</p>
                    <p>Clima = {this.props.clima}</p>
                    <p>productos = {this.props.productos}</p>
                    <p>subditos = {this.props.subditos}</p>
                 </div>

                
            </div>

            
        )
    }
}

  export default Territorios