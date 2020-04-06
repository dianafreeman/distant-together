import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: ${props => (props.fixed ? `100px` : "0px")};
  min-height: 50vh;
`;
const PageSection = ({ children, bg, fixed }) => {
  return (
    <Wrapper fixed={fixed} style={{ backgroundColor: bg || "lightgray" }}>
      {children}
    </Wrapper>
  );
};

export default PageSection;
