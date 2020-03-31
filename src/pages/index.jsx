import React, { Component } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import colors from "../theme/colors";
import List from "../components/List";
import NavBar from "../components/NavBar";
import sitemeta from "../lib/sitemeta";

const Section = styled(ParallaxLayer)`
  min-height: calc(100vh);
  position: relative;
  display: flex;
  background-color: ${props => props.bg};
`;

const Col = styled.div`
  background-color: ${props => props.bg};
`;

const ColumnTitle = styled.h1`
  margin: auto;
  display: inline-flex;
`;
const Home = ({ resources }) => {
  return (
    <>
      <NavBar />
      {/* <Parallax pages={2}> */}
      {/* <Section offset={0} speed={0.2} bg={colors.sky}> */}
      {/* <ParallaxLayer offset={0} speed={0.5}> */}
      <div className="container-fluid">
        <div className="row" style={{ paddingTop: "100px" }}>
          <Col>
            <ColumnTitle>{sitemeta.title}</ColumnTitle>
            <List data={resources} />
          </Col>
        </div>
      </div>
      {/* </ParallaxLayer> */}
      {/* <Col bg={colors["sky-dark"]}>
            <p>Some other stuff here</p>
          </Col> */}
      {/* </Section> */}
      {/* <Section speed={0.2} bg={colors["green-dark"]}> */}
      {/* <Col speed={0.5}>
        <h1>{sitemeta.title}</h1>
        <List data={resources} />
      </Col>
      <Col bg={colors.blue}>
        <p>Some other stuff here</p>
      </Col> */}
      {/* </Section> */}
      {/* </Parallax> */}
    </>
  );
};

export default Home;
