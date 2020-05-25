import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import "../Style/Components/Amorios.css";
import AmoriosForm from "./AmorioForm.jsx";
class AmoriosItem extends React.Component {
  state = {
    data: [
      {
        id: "1",
        name: "vasallo1",
        puesto: "guerrero",
        status: "noble",
      },
      {
        id: "2",
        name: "vasallo2",
        puesto: "granjero",
        status: "plebeyo",
      },
    ],
  };

  proveLover = (id) => {
    const prueba = Math.floor(Math.random() * (0, 9));
    if (prueba === 1) {
      alert("paso la prueba");
    } else {
      alert("fallo la prueba");
      this.killLover(id);
    }
  };
  killLover = (id) => {
    const love = this.state.data.filter((amorios) => amorios.id !== id);
    this.setState({ data: love });
  };
  addNewLover = (form) => {
    const lover = {
      id: this.state.data.length + 1,
      name: form.name,
      puesto: form.puesto,
      status: form.status,
    };
    this.setState({
      data: [...this.state.data, lover],
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="amor__container">
          <ul title ="Amorios" className="amor__container__list">
            {this.state.data.map((e) => {
              return (
                <li className="amor__container__list__item" key={e.id}>
                  <div className="amor__container__list-p">
                    
                     {e.name} {e.puesto} {e.status}{" "}
                    </div>
                    <div className="amor__container__list__item-button">
                    <button  className="amor__container__list__item-button-mt" onClick={this.killLover.bind(this, e.id)}>
                      Matar
                    </button>{" "}
                    <button  className="amor__container__list__item-button-mt" onClick={this.proveLover.bind(this, e.id)}>
                      Probar
                    </button>{" "}
                    </div>
                  
                </li>
              );
            })}
          </ul>
          <div className="amor__container__form-container">
            <AmoriosForm addNewLover={this.addNewLover} />
          </div>
          <div className="goBack">
            <Link to='/'>  Go Back</Link>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AmoriosItem;
