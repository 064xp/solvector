import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./views/Home/Home";
import Matrix from "./views/Matrix/Matrix";
import Operations from "./functions/opList.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home operations={Operations} />
          </Route>
          <Route exact path="/matrix">
            <Matrix operations={Operations} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
