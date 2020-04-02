import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../lib/theme/colors";

const Wrapper = styled.div`

`;

const Count = styled.span``;
const Toggle = styled.button`
  background: none;
  border-radius: 100px;
  outline: none;
  border: 1px solid white;
  color: ${colors.white}

`;
const ResultsBar = ({ listLength, onToggleClick, ...rest }) => {
  return (
    <>
      <Count>Showing {listLength} results</Count>
      <Toggle onClick={onToggleClick} > <i className="fas fa-arrow-right"> </i> </Toggle>
    </>
  );
};

export default ResultsBar;
