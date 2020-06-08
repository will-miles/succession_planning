import React, { Component } from 'react';
import './Nav.css';
import { Link, Location } from '@reach/router';

class Nav extends Component {
  state = {};

  render() {
    return (
      <div className="Nav">
        <h3>
          <Link to="/" className="Home navLink" onClick={handleNavClick}>
            Home
          </Link>
        </h3>
        <h3>
          <Link
            to="/succession-planning"
            className="SuccPlan navLink"
            onClick={handleNavClick}
          >
            Succession Planning
          </Link>
        </h3>
        {/* <Link to="/vita-profiling" className="VitaProf">
        <h3>Vita Profiling</h3>
      </Link> */}
        <h3>
          <Link
            to="/speaking"
            className="Speaking navLink"
            onClick={handleNavClick}
          >
            Speaking
          </Link>
        </h3>
        <h3>
          <Link
            to="/contact"
            className="Contact navLink"
            onClick={handleNavClick}
          >
            Contact
          </Link>
        </h3>
      </div>
    );
  }
}

const handleNavClick = (e) => {
  console.log(e.target.classList);
  if (e.target.classList.contains('orangeText')) {
    e.target.classList.remove('orangeText');
  } else {
  }
};

export default Nav;
