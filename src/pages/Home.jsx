import React, { Component } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import colors from "../theme/colors";
import List from '../components/List'

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Section = styled.section`
  min-height: calc(100vh - 80px);
  position: relative;

`;

const Home = ({resources}) => {
  return (
      <Section>
        <h1>This is a title</h1>

    <List data={resources}/>
        <pre>
          {/* {JSON.stringify(resources, null, 2)} */}
        </pre>
      </Section>
  );
};

export default Home;
