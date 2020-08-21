import React from "react";
import { NavLink } from "react-router-dom";
import routes from "./../../views/routes";
import "./Navigation.scss";

const Navigation = () => (
  <ul className="nav_list">
    <li>
      <NavLink
        exact
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={routes.home}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className="Navigation-link"
        activeClassName="Navigation-link-active"
        to={routes.movies}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
