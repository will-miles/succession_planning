import React from "react";
import "./Nav.css";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/" className="Home">
        <h3>Home</h3>
      </Link>
      <Link to="/succession-planning" className="SuccPlan">
        <h3>Succession Planning</h3>
      </Link>
      {/* <Link to="/vita-profiling" className="VitaProf">
        <h3>Vita Profiling</h3>
      </Link> */}
      <Link to="/speaking" className="Speaking">
        <h3>Speaking</h3>
      </Link>
      <Link to="/contact" className="Contact">
        <h3>Contact</h3>
      </Link>
    </div>
  );
};

export default Nav;
