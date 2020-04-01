import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: ${props => (props.maybePadTop ? `100px` : "0px")};
  min-height: 50vh;
`;
const PageSection = ({ children, bg, padTop }) => {
  return (
    <Wrapper
      className="container-fluid"
      maybePadTop={padTop}
      style={{ backgroundColor: bg || "lightgray" }}
    >
      {children}
    </Wrapper>
  );
};

export default PageSection;
