import React, { Component } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import colors from "../theme/colors";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Section = styled.section`
  background-color: ${colors.sky};
  min-height: 80vh;
`;
const Home = () => {
  return (
    <>
      <Section>
        <h1>This is a title</h1>
      </Section>
      <Section>
        <h1>This is a title</h1>
      </Section>
    </>
  );
};

export default Home;
