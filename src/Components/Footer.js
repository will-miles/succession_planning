import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <p>
        All Images sourced from{' '}
        <a href="https://unsplash.com/" className="unsplashLink">
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default Footer;
