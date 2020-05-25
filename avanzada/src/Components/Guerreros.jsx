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
        name: "guerrero1",
        espacialidad : 'caballos',
        cargo : 'Dodraki x',
        personaAsesinada : 'como mil campecinos x',
        interes: "5",
      },
      {
        id: "2",
        name: "guerrero",
        espacialidad : 'linea frontal',
        cargo : 'Inmaculado',
        personaAsesinada : 'como 1000',
        interes: "mm 0 es eonuco",
      },
    ],
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
            {this.state.data.map((e) => {
              return (
                <li className="guerreros__container__list__item" key={e.id}>
                  <p>
                    {" "}
                    {e.id} {e.name} {e.especialidad} {e.cargo} {e.personaAsesinada} {e.interes}{" "}
                    
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