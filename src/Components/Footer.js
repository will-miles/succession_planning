import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        All Images sourced from{' '}
        <a href="https://unsplash.com/" className="footer-link">
          Unsplash
        </a>
      </p>
      <p>
        Logo courtesy of{' '}
        <a
          href="https://niamhholmesdesign.squarespace.com"
          className="footer-link"
        >
          Niamh Holmes Design
        </a>
      </p>
    </div>
  );
};

export default Footer;
