import React, { useState } from "react";
import styled from "styled-components";
import { default as BsForm } from "react-bootstrap/Form";
import Radio from "./Radio";
import colors from "../../lib/theme/colors";
import ItemLabel from "./ItemLabel";

const FormWrapper = styled(BsForm)`
  background-color: ${colors.white};
`;

const FormGroup = styled(BsForm.Group)`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 1em 0em;
  justify-content: space-between;
`;

const Input = styled(BsForm.Control)`
  flex: 1;
  color: ${colors.blue};
  position: relative;
`;

const Form = ({ onTermChange, radioOptions }) => {
  const [selectedOpts, setSelectedOpts] = useState([]);

  const handleOptionToggle = e => {
    const clicked = e.target.value;
    console.log(clicked)
      selectedOpts.indexOf(clicked) == -1
        ? selectedOpts.push(clicked)
        : selectedOpts.splice(selectedOpts.indexOf(clicked));

    setSelectedOpts(selectedOpts)
    console.log(selectedOpts)
  };
  return (
    <FormWrapper>
      <FormGroup>
        <ItemLabel>Search By Term</ItemLabel>
        <Input
          type="text"
          name="resource-search-term"
          placeholder={`What are you looking for?`}
          onChange={onTermChange}
        />
      </FormGroup>
      <FormGroup>
        <Radio options={radioOptions} selectedOptions={selectedOpts} onOptionToggle={handleOptionToggle} />
      </FormGroup>
    </FormWrapper>
  );
};

export default Form;
