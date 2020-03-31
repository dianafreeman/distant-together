import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const ItemWrap = styled.div`
  width: 80%;
  height: 100px;
  background: white;
  margin: 1em auto;
`;
const BoxRow = ({ title, source, link }) => {
  return title && link ? (
    <ItemWrap>
      {title && <span>{title}</span>}
      <br />
      <a href={link} target="_blank">
        {" "}
        Go! (new tab)
      </a>
      {source && <small>Source: {source}</small>}
    </ItemWrap>
  ) : false
};

const List = ({ data }) => {
  return (
    <>
      {data.resources &&
        data.resources.map(d =>
          d.Link && d.Title.length > 0 ? (
            <BoxRow
              key={`a-${d.Title.toString().toLowerCase().replace(" ", "-")}`}
              title={d.Title}
              link={d.Link}
            />
          ) : null
        )}
    </>
  );
};

export default List;
