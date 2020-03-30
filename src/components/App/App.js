import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Resources from "../../pages/Resources";
import Axios from 'axios'
import Team from "../../pages/Team";
import NavBar from "../NavBar"
import './App.scss'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      resources: null
    }
  }

  componentDidMount(){
    Axios.get('/api/resources').then(resources => {
      this.setState({ resources: resources.data })
    })
  }
  render(){
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home resources={{ ...this.state.resources }}/>
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
}

export default App;
