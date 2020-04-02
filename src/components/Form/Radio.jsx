import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import colors from "../../lib/theme/colors";
import ItemLabel from "./ItemLabel";

const Wrapper = styled.div`
`;
const Option = styled.button`
  background: ${props =>
    props.isActive ? colors["blue"] : colors["blue-light"]};
  border: 1px solid ${colors["blue"]};
  color: ${props => (props.isActive ? colors.white : colors["blue-dark"])};
  outline: none;
  margin: 0 0.25vw;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-flow: row wrap;

    button {
      margin: 0.25em 0.5em;
    }
`
const OptionButton = ({ value, label, isActive, onClick }) => {
  const [btnIsActive, setBtnIsActive] = useState(isActive)
  return (
    <Option className={"btn"} isActive={btnIsActive} onClick={(e) => {
      e.preventDefault()
      setBtnIsActive(!btnIsActive)
      onClick(e)
    }} value={value}>
      {label}
    </Option>
  );
};

const Radio = ({ options, selectedOptions, onOptionToggle }) => {
  return (
    <Wrapper>
      <ItemLabel>Filter by Tag</ItemLabel>
      <ButtonGroup >
        {options.map(o => (
          <OptionButton value={o} label={o} onClick={onOptionToggle} isActive={selectedOptions.indexOf(o) !== -1}/>
        ))}
      </ButtonGroup>
    </Wrapper>
  );
};

export default Radio;
