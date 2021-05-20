import React from "react";
import "./Header.css";
import { Link } from "@reach/router";
import Nav from "./Nav";
import logoImg from "../images/logo.png";

const Header = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo-link">
        <img id="logo-img" src={logoImg} alt="rbd_logo" />
        <h1>Rapport by Design</h1>
      </Link>
      <Nav className="nav" />
    </div>
  );
};

export default Header;
