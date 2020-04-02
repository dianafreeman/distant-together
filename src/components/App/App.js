import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../views/Home";
import Resources from "../../views/Resources";
import Axios from "axios";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: null
    };
  }

  componentDidMount() {
    // Axios.get("/api/resources").then(resources => {
    //   this.setState({ resources: resources.data.resources });
    // });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home resources={{ ...this.state.resources }} />
          </Route>
          <Route exact path="/">
            {/* <Resources resources={{ ...this.state.resources }} /> */}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
