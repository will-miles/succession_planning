import React from 'react';
import './Header.css';
import { Link } from '@reach/router';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo-link">
        <h1>RBD</h1>
      </Link>
      <Nav className="nav" />
    </div>
  );
};

export default Header;
