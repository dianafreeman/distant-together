import React from "react";
import styled from "styled-components";
import { default as BsForm } from "react-bootstrap/Form";
import Radio from "./Radio";
import colors from "../../lib/theme/colors";
import ItemLabel from "./ItemLabel";

const FormWrapper = styled(BsForm)`
background-color: ${colors.white}
`;

const FormGroup = styled(BsForm.Group)`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin: 0.5em 0em;
  justify-content: space-between;
`;

const Input = styled(BsForm.Control)`
  flex: 1;
  color: ${colors.blue};
`;

const Form = ({ onTermChange }) => {
  return (
    <FormWrapper>
      <FormGroup>
        <ItemLabel>
          <span>Search By Term</span>
        </ItemLabel>
        <Input
          type="text"
          name="resource-search-term"
          placeholder="What are you looking for?"
          onChange={onTermChange}
        />
      </FormGroup>
      <FormGroup>
        <Radio />
        <Radio />
      </FormGroup>
    </FormWrapper>
  );
};

export default Form;
