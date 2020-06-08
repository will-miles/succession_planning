import React, { Component } from 'react';
import './Nav.css';
import { Link } from '@reach/router';

class Nav extends Component {
  state = {};

  render() {
    return (
      <div className="nav">
        <h3>
          <Link to="/" className="home nav-link" onClick={handleNavClick}>
            Home
          </Link>
        </h3>
        <h3>
          <Link
            to="/succession-planning"
            className="succ-plan nav-link"
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
            className="speaking nav-link"
            onClick={handleNavClick}
          >
            Speaking
          </Link>
        </h3>
        <h3>
          <Link
            to="/contact"
            className="contact nav-link"
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
  if (e.target.classList.contains('orange-text')) {
    e.target.classList.remove('orange-text');
  } else {
  }
};

export default Nav;
