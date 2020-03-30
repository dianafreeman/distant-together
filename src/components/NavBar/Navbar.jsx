import React from "react";
import sitemeta from '../../lib/sitemeta'
import styled from 'styled-components'

const NavWrapper = styled.nav`
border-radius: unset;
`
const Navbar = () => {
  return (
    <NavWrapper
      className="navbar navbar-inverse navbar-expand-lg"
      role="navigation"
    >
      <a className="navbar-brand" href="#">
        {sitemeta.title}
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbar-collapse-01"
      ></button>
      <div className="collapse navbar-collapse" id="navbar-collapse-01">
        <ul className="nav navbar-nav mr-auto">
          <li>
            <a href="#fakelink">
              Menu Item<span className="navbar-unread">1</span>
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              Messages
            </a>
            <span className="dropdown-arrow"></span>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Another action</a>
              </li>
              <li>
                <a href="#">Something else here</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#">Separated link</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#fakelink">About Us</a>
          </li>
        </ul>
        <form
          className="navbar-form form-inline my-2 my-lg-0"
          action="#"
          role="search"
        >
          <div className="form-group">
            <div className="input-group">
              <input
                className="form-control"
                id="navbarInput-01"
                type="search"
                placeholder="Search"
              />
              <span className="input-group-btn">
                <button type="submit" className="btn">
                  <span className="fui-search"></span>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </NavWrapper>
  );
}

export default Navbar;
