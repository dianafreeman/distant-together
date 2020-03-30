import React, { Component } from "react";
// import React, { useEffect, useState } from "react";
import Axios from "axios";

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
      isLoading: true
    };
  }
  async fetchResources() {
    const resp = await Axios.get("/api/resources");
    const resources = resp.data.resources;
    this.setState({ resources, isLoading: false });
  }

  componentDidMount() {
    this.fetchResources();
  }

  render() {
    return (
      <div>
        {" "}
        <h1>A Resources PAGE </h1>
        <pre>
          {this.state.isLoading && <h1>Loading...</h1>}
          {JSON.stringify(this.state.resources, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Resources;
