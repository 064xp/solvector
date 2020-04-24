import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./views/Home/Home";
import Matrix from "./views/Matrix/Matrix";
import GaussJordan from "./views/GaussJordan/GaussJordan";
import About from "./views/About/About";
import Operations from "./functions/opList.js";

function App() {
  const [selectedOperation, selectOperation] = useState(null);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home operations={Operations} selectOperation={selectOperation} />
          </Route>
          <Route exact path="/matrix">
            <Matrix defaultState={Operations[selectedOperation]} />
          </Route>
          <Route exact path="/gauss-jordan">
            <GaussJordan defaultMatrix={Operations[0].matrix} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
