import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "../../pages";
// import Resources from "../../pages/Resources";
import Axios from "axios";
// import Team from "../../pages/Team";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: null
    };
  }

  componentDidMount() {
    Axios.get("/api/resources").then(resources => {
      this.setState({ resources: resources.data });
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Index resources={{ ...this.state.resources }} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
