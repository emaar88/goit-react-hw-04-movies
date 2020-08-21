import React from "react";
import "./Layout.scss";
import Appbar from "./../Appbar/Appbar";

const Layout = ({ children }) => (
  <div className="layout">
    <Appbar />
    <hr />
    {children}
  </div>
);

export default Layout;
