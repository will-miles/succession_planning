import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        All Images sourced from{' '}
        <a href="https://unsplash.com/" className="unsplash-link">
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default Footer;
