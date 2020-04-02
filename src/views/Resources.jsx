import React, { Component } from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import colors from "../lib/theme/colors";
// import List from "../components/List";
import NavBar from "../components/NavBar";
import PageSection from "./layouts/Section";
import sitemeta from "../lib/sitemeta";

const Col = styled.div`
  background-color: ${props => props.bg};
`;

const ColumnTitle = styled.h1`
  margin: auto;
  display: inline-flex;
`;
const Resources = ({ resources }) => {
  return (
    <>
      <NavBar />
      <Parallax pages={6}>
        <ParallaxLayer offset={0} speed={0.2} bg={colors.sky} />
        <ParallaxLayer offset={0} speed={0.5}>
          <PageSection bg={colors.sky} padTop={true}>
            <Col className="col">
              <ColumnTitle>{sitemeta.title}</ColumnTitle>
            </Col>
          </PageSection>
          <PageSection
            bg={colors["blue-dark"]}
            className={"text-center"}
          ></PageSection>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Resources;
