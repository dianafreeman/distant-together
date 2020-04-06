import React from "react";
import styled from "styled-components";

const RowWrap = styled.div`
  min-height: 50vh;
  padding: 1em;
  ${props => props.maybePadTop && `padding-top: 100px`};
`;
const Row = ({ children, ...rest }) => {
  return (
    <RowWrap className="row text-center mx-auto" {...rest}>
      {children}
    </RowWrap>
  );
};

export default Row;
