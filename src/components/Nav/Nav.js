import React from "react";
import "./nav.css";
import Logo from "../../assets/solvector_logo.svg";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav>
      <Link className="nav-logo" to="/">
        <img className="nav-logo" src={Logo} alt="Solvector" />
      </Link>
      <ul className="nav-items">
        <li>
          <Link to="#">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
