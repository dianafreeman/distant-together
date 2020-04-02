import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import colors from "../../lib/theme/colors";
import ItemLabel from "./ItemLabel";

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`
const Option = styled(Button)`
  background: ${props =>
    props.isActive ? colors["blue"] : colors["blue-light"]};
  border: 1px solid ${colors["blue"]};
  color: ${props => (props.isActive ? colors.white : colors["blue-dark"])};
  outline: none;
  margin: 0 0.25vw;
  border-radius: 5px;
`;
const OptionButton = ({ value, label, isActive }) => {
  return (
    <Option className={"btn"} isActive={isActive} value={value}>
      {label}
    </Option>
  );
};

const Radio = () => {
  return (
    <Wrapper>
      <ItemLabel>Filter Group</ItemLabel>
      <OptionButton value={12} label={"Option A"} isActive />
      <OptionButton value={12} label={"Option B"} />
      <OptionButton value={12} label={"Option C"} />
    </Wrapper>
  );
};

export default Radio;
