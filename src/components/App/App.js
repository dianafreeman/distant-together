import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Resources from "../../pages/Resources";
import Team from "../../pages/Team";
import NavBar from "../NavBar"
import './App.scss'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
