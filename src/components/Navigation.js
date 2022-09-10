import React from "react";
import { NavLink } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li> À propos </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
