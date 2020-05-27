import React from 'react'
import { Link } from 'react-router-dom';

import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import "../Style/Components/Subditos.css";
import SubditosForm from "./SubditosForm.jsx";
class SubditosItem extends React.Component {
  state = {
    data: [
      {
        id: "1",
        name: "Tyrion Lanister",
        hijos : '0',
        nombre_hijos : 'Sin hijos',
        problema : 'Derrochador',
        status: "Noble",
      },
      {
        id: "2",
        name: "Ellaria Sand",
        hijos : '3',
        nombre_hijos : 'Obella Sand, Tyene Sand, Nymeria Sand',
        problema : 'Viuda',
        status: "Bastarda",
      },
    ],
  };
  killSubdito = (id) => {
    const love = this.state.data.filter((amorios) => amorios.id !== id);
    this.setState({ data: love });
  };

  addNewSubdito = (form) => {
    const Subdito = {
      id: this.state.data.length + 1,
      name: form.name,
      hijos: form.hijos,
      nombre_hijos : form.nombe_hijos,
      status: form.status,
      problema : form.problema
    };
    this.setState({
      data: [...this.state.data, Subdito],
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="subditos__container">
          <ul className="subditos__container__list">
          <div className="guerreros__container__list-encabezado">
               <p className="guerreros__container__list-encabezado-item">Nombre</p>
                <p className="guerreros__container__list-encabezado-item">Hijos</p> 
                <p className="guerreros__container__list-encabezado-item">Nombre de los hijos </p>
                <p className="guerreros__container__list-encabezado-item">Status</p> 
                <p className="guerreros__container__list-encabezado-item">Problema</p>
            </div>

            {this.state.data.map((e) => {
              return (
                <li className="subditos__container__list__item" key={e.id}>
                  <p className="guerreros__container__list__item__data">
                     <p className="guerreros__container__list__item__data-item ">{e.name}</p>
                     <p>{e.hijos}</p>
                     <p>{e.nombre_hijos}</p>
                     <p>{e.status}</p>
                     <p>{e.problema}</p>                        
                     <button  className="amor__container__list__item-button-mt" onClick={this.killSubdito.bind(this, e.id)}>
                      Matar
                    </button>
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="subditos__container__form-container">
            <SubditosForm addNewSubdito={this.addNewSubdito} />
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


export default SubditosItem;