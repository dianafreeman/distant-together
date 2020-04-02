import React, { useState, useEffect } from "react";
import styled from "styled-components";
import sitemeta from "../lib/sitemeta";
import colors from "../lib/theme/colors";
import RESOURCES from "../lib/resources.json";
import Form from "../components/Form";
import ListItem from "../components/ListItem";
import NothingFound from "../components/NothingFound";
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

const ColumnTitle = styled.h1`
  margin: 1em 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
`;

const DataColumn = styled.div`
  position: absolute;
  right: 0;
  background-color: ${colors["grey-lightest"]};
`;


// const getUnique = array => {
//   let output = [];
//   for (let a = 0; a < array.length ; a + 1 ){
//     if (output.indexOf(array[a]) === -1 ){

//       output.push(array[a])
//     }
//   }
//   return output;

// }
const getAreas = resources => {
  let all = resources.map(r => r.Area.split(",")).map( a => a[0]).filter( a => a.length > 0);
  let set = [...new Set(all)];
  return set
}

const Home = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeAreas, setActiveAreas] = useState([])

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
            <img
              src={`${process.env.PUBLIC_URL}/images/headerText.png`}
              width="100%"
              aria-hidden="true"
            />

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
            radioOptions={getAreas(resources)}
          />
          <ResultsBar listLength={resources.length} />
          {resources.length > 0 ? (
            resources.map(r => <ListItem item={r} />)
          ) : (
            <NothingFound />
          )}
        </DataColumn>
      </div>
    </div>
  );
};

export default Home;
