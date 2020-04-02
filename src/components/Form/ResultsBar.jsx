import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../lib/theme/colors";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${colors["grey-dark"]};
  color: ${colors.white};
  padding: 0.5em;
`;

const Count = styled.span``;
const Toggle = styled.button`
  background: none;
  border-radius: 100px;
  outline: none;
  border: 1px solid white;
  color: ${colors.white}

`;
const ResultsBar = ({ listLength, onToggleClick }) => {
  return (
    <Wrapper>
      <Count>Showing {listLength} results</Count>
      <Toggle onClick={onToggleClick} > <i className="fas fa-arrow-right"> </i> </Toggle>
    </Wrapper>
  );
};

export default ResultsBar;
