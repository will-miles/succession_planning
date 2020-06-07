import React from 'react';
import './Logo.css';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="Header">
        <img className="logoImg" src={'../logo.png'} alt="Rapport4All Logo" />
        <h1>Rapport4All</h1>
        <h2>Becky Miles</h2>
      </Link>
    </div>
  );
};

export default Header;
