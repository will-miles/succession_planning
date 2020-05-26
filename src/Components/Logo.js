import React from 'react';
import './Logo.css';
import { Link } from '@reach/router';

const Home = () => {
  return (
    <div className="Logo">
      <Link to="/">
        <img className="logoImg" src={'../logo.png'} alt="Rapport4All Logo" />
      </Link>
    </div>
  );
};

export default Home;
