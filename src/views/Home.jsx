import React, { useState } from "react";
import styled from "styled-components";
import sitemeta from "../lib/sitemeta";
import colors from "../lib/theme/colors";
import RESOURCES from "../lib/resources.json";
import Form from "../components/Form";
import ListItem from "../components/ListItem";
import ResultsBar from "../components/Form/ResultsBar";
const FixedColumn = styled.div`
  position: fixed;
  height: 100vh;
  z-index: 1;
  display: flex;
  background-color: ${colors["grey-dark"]};
  color: ${colors.white};
`;

const FixedContent = styled.div`
  margin: auto;
`;

const ColumnTitle = styled.h1``;

const DataColumn = styled.div`
  position: absolute;
  right: 0;
  background-color: ${colors["grey-lightest"]};
`;
const Home = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const resources = RESOURCES.filter(
    r =>
      (r.Title && r.Title.includes(searchTerm)) ||
      (r["Source (Organization)"] &&
        r["Source (Organization)"].includes(searchTerm))
  );
  return (
    <div className="container-fluid">
      <div className="row">
        <FixedColumn className="col-sm-6 col-lg-4">
          <FixedContent>
            <ColumnTitle className="my-auto">{sitemeta.title}</ColumnTitle>
            <p>Some icons stuff</p>
          </FixedContent>
        </FixedColumn>
        <DataColumn className="col-sm-6 col-lg-8">
          <Form
            onTermChange={e => {
              console.log(e.target.value);
              setSearchTerm(e.target.value);
            }}
          />
          <ResultsBar listLength={resources.length} />
          {resources.map(r => (
            <ListItem item={r} />
          ))}
        </DataColumn>
      </div>
    </div>
  );
};

export default Home;
