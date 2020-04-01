import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const ItemWrap = styled.div`
  margin: 1em auto;
`;
const BoxRow = ({ title, source, link }) => {
  return title && link ? (
    <ItemWrap className="col-sm-6 col-md-4">
      <div className="card">
        {title && <span>{title}</span>}
        <br />
        <a href={link} target="_blank">
          {" "}
          Go! (new tab)
        </a>
        {source && <small>Source: {source}</small>}
      </div>
    </ItemWrap>
  ) : (
    false
  );
};

const ListRow = styled.div`
  margin: 1em;
`;
const List = ({ data }) => {
  return (
    <ListRow className="row">
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
    </ListRow>
  );
};

export default List;
