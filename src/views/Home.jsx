/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import sitemeta from "../lib/sitemeta";
import colors from "../lib/theme/colors";
import screens from "../lib/theme/screens";
import Form from "../components/Form";
import ListItem from "../components/ListItem";
import NothingFound from "../components/NothingFound";

const LoadingIndicator = styled.h1`
  color: red;
`;

const FixedColumn = styled.div`
  height: auto;
  z-index: 1;
  display: flex;
  background-color: ${(props) => props.bg};
  color: ${colors.white};
  @media screen and (min-width: ${screens.md}) {
    height: 100vh;
    position: fixed;
  }
`;

const FixedContent = styled.div`
  margin: auto;
  text-align: center;
  img {
    max-width: ${screens.sm};
  }
`;

const ColumnTitle = styled.h1`
  margin: 1em 0;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 24px;
`;

const DataColumn = styled.div`
  right: 0;
  background-color: ${colors["grey-lightest"]};
  @media screen and (min-width: ${screens.md}) {
    top: ${(props) => props.offsetTop}px;
    position: absolute;
  }
`;

const Home = ({ store }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const formEl = useRef(null);

  useEffect(() => {
    store.getResources();
    formEl.current && setHeaderHeight(formEl.current.firstChild.clientHeight);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <FixedColumn className="col-md-6 col-lg-4" bg={colors["grey-dark"]}>
          <FixedContent>
            <img
              src={`${process.env.PUBLIC_URL}/images/headerText.png`}
              width="100%"
              aria-hidden="true"
              alt={sitemeta.title}
            />

            <ColumnTitle className="my-auto">{sitemeta.subtitle}</ColumnTitle>
          </FixedContent>
        </FixedColumn>
        <FixedColumn className="col-md-6 col-lg-4">
          <div ref={formEl} style={{ width: "100%" }}>
            <Form
              onTermChange={(e) => store.setSearchTerm(e.target.value)}
              radioOptions={store.areas}
            />
          </div>
        </FixedColumn>
      </div>

      <DataColumn offsetTop={headerHeight} className="col-md-6 col-lg-8">
        {store.isLoading ? (
          <LoadingIndicator>LOADING</LoadingIndicator>
        ) : store.filtered.length > 0 ? (
          store.filtered.map((r) => <ListItem item={r} />)
        ) : (
          <NothingFound />
        )}
      </DataColumn>
    </div>
  );
};

export default inject("store")(observer(Home));
