import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Amorios from "../Components/Amorios.jsx";
import Guerreros from "../Components/Guerreros.jsx";
import Subditos from "../Components/Subditos.jsx";
import SetTerritorios from "../Components/SetTerritorios.jsx";
import SetDragones from "../Components/SetDragones.jsx";
import Home from "../Pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Amorios" component={Amorios} />
        <Route exact path="/Guerreros" component={Guerreros} />
        <Route exact path="/Subditos" component={Subditos} />
        <Route exact path="/Territorios" component={SetTerritorios} />
        <Route exact path="/Dragones" component={SetDragones} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
