import React from "react";
import sitemeta from "../../lib/sitemeta";
import styled from "styled-components";

const NavWrapper = styled.nav`
  border-radius: unset;
`;

const NavItem = ({ slug, title }) => {
  return (
    <li>
      <a href={`/${slug}`}>{title}</a>
    </li>
  );
};


const Navbar = () => {
  return (
    <NavWrapper
      className="navbar navbar-inverse navbar-expand-lg"
      role="navigation"
    >
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbar-collapse-01"
      ></button>
      <div className="collapse navbar-collapse" id="navbar-collapse-01">
        <ul className="nav navbar-nav mx-auto">
          {sitemeta.routes.map(r => (
            <NavItem
              key={`nav-item-${r.title.toLowerCase().replace(" ", "-")}`}
              title={r.title}
              slug={r.slug}
            />
          ))}
        </ul>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
