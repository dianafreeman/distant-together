import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Resources from "../../pages/Resources";
import Team from "../../pages/Team";

const App = () => {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </div>
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
