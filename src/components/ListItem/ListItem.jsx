import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import colors from "../../lib/theme/colors";

const ListItemWrap = styled.div`
  background-color: ${colors.white};
  min-height: 100px;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 0 0.5em;
  border: 1px solid gray;
  display: flex;
`;

const Title = styled.p`
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  margin: unset;
  padding: unset;
`;
const GoArrow = styled.a`
  float: right;
  border-radius: 100px;
  border: 1px solid ${colors["grey-dark"]};
  color: ${colors["grey-dark"]};
`;

const FlexCol = styled.div`
  display: inline-flex;
  flex: 1;
  margin: auto;
`;

const Source = styled.p`
  a {
  }
`;
const ListItem = ({ item }) => {
  return (
    <ListItemWrap className="card">
      <FlexCol>
        <div>
          <Title>{item.Title}</Title>
          <Source>Source: {item["Source (Organization)"]}</Source>
        </div>
      </FlexCol>

      <button>
        <i class="fas fa-arrow-right"></i>
      </button>
      <GoArrow href={item.Link} target="_blank"></GoArrow>
    </ListItemWrap>
  );
};

export default ListItem;
