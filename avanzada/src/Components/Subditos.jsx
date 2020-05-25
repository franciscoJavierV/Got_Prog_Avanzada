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
        name: "subdito1",
        hijos : '3',
        nombe_hijos : 'subhijo1 subhijo2 subhijo3',
        problema : 'decendencia',
        status: "noble",
      },
      {
        id: "2",
        name: "subdito2",
        hijos : '2',
        nombe_hijos : 'sub2hijo1 sub2hijo2 sub2hijo3',
        problema : 'plata',
        status: "plebeyo",
      },
    ],
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
            {this.state.data.map((e) => {
              return (
                <li className="subditos__container__list__item" key={e.id}>
                  <p>
                    {" "}
                    {e.id} {e.name} {e.hijos} {e.nombre_hijos} {e.problema} {e.status}{" "}
                    
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