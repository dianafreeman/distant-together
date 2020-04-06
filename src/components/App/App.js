import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../views/Home";
import Resources from "../../views/Resources";
import "./App.scss";

const App = ({ store }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/">
          {/* <Resources resources={{ ...this.state.resources }} /> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
