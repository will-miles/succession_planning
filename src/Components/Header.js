import React from 'react';
import './Header.css';
import { Link } from '@reach/router';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="Logo">
      <Link to="/" id="logoText">
        <h1>RBD</h1>
      </Link>
      <Nav className="Nav" />
    </div>
  );
};

export default Header;
