import React, { Component } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import colors from "../theme/colors";
import List from "../components/List";
import NavBar from "../components/NavBar";
import Section from "./layouts/Section";
import Row from "./layouts/Row";
import sitemeta from "../lib/sitemeta";

const Col = styled.div`
  background-color: ${props => props.bg};
`;

const ColumnTitle = styled.h1`
  margin: auto;
  display: inline-flex;
`;
const Home = ({}) => {
  return (
    <>
      <NavBar />
      <Section padTop={true}>
        <ColumnTitle>{sitemeta.title}</ColumnTitle>
      </Section>
      <Section bg={colors.white} className={"text-center"}>
        <Row>
          <div className="col-sm-4 mx-auto">
            <div className="card  bg-secondary text-light h-100">
              For Clincians
            </div>
          </div>
          <div className="col-sm-4 mx-auto">
            <div className="card bg-secondary text-light  ">For Emer</div>
          </div>
          <div className="col-sm-4 mx-auto">
            <div className="card bg-secondary text-light  ">I am a:</div>
          </div>
        </Row>
      </Section>

      <Section className={"text-center"}>
        <h2>SomeMore</h2>
      </Section>
    </>
  );
};

export default Home;
