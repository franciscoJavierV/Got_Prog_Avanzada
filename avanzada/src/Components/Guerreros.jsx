import React from 'react'
import { Link } from 'react-router-dom';
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import "../Style/Components/Guerreros.css";
import GuerrerosForm from "./GuerrerosForm.jsx";

class Guerreros extends React.Component {
  state = {
    data: [
      {
        id: "1",
        name: "Jorah mormont",
        especialidad : 'Caballero',
        cargo : 'Consejero',
        personaAsesinada : '15',
        interes: "0",
      },
      {
        id: "2",
        name: "Barristan selmy",
        especialidad : 'Espada',
        cargo : 'Guardaespaldas',
        personaAsesinada : '1000+',
        interes: "1",
      },
    ],
  };
  killGuerrero = (id) => {
    const love = this.state.data.filter((amorios) => amorios.id !== id);
    this.setState({ data: love });
  };

  addNewGuerrero = (form) => {
    const Guerrero = {
      id: this.state.data.length + 1,
      name: form.name,
      especialidad : form.especialidad,
      cargo : form.cargo,
      personaAsesinada: form.personaAsesinada,
      interes : form.interes
    };
    this.setState({
      data: [...this.state.data, Guerrero],
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="guerreros__container">
          <ul className="guerreros__container__list">
            <div className="guerreros__container__list-encabezado">
               <p className="guerreros__container__list-encabezado-item">Nombre</p>
                <p className="guerreros__container__list-encabezado-item">Especialidad</p> 
                <p className="guerreros__container__list-encabezado-item">Cargo </p>
                <p className="guerreros__container__list-encabezado-item">Asesinatos</p> 
                <p className="guerreros__container__list-encabezado-item">Interes</p>
                <p className="guerreros__container__list-encabezado-item">Accion</p>
            </div>
          
            {this.state.data.map((e) => {
              return (
                <li className="guerreros__container__list__item" key={e.id}>
                  
                  <p className="guerreros__container__list__item__data">
                     <p>{e.name}</p>
                     <p>{e.especialidad}</p>
                     <p>{e.cargo}</p>
                     <p>{e.personaAsesinada}</p>
                     <p>{e.interes}</p>                        
                     <button  className="amor__container__list__item-button-mt" onClick={this.killGuerrero.bind(this, e.id)}>
                      Matar
                    </button>
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="guerreros__container__form-container">
            <GuerrerosForm addNewGuerrero={this.addNewGuerrero} />
          </div>
          <div className="goBack">
            <Link to=''>  Go Back</Link>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Guerreros;