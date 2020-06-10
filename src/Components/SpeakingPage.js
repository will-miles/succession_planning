import React from 'react';
import './SpeakingPage.css';

const SpeakingPage = () => {
  return (
    <div className="speaking-page">
      <div className="speaking-section-1">
        <h2 className="orange-text title">Speaking</h2>
        <p>
          Becky is available to speak on the topic of Family Succession Planning
          and has delivered well received and engaging presentations at a number
          of events.
        </p>
        <h3 className="orange-text">Recent engagements:</h3>
        <h4>Feb 2020</h4>
        <p>
          CLA Succession Event – Northants
          <br />
          CLA Succession Event – Hampshire
        </p>
        <h4>June 2020</h4>
        <p>Cereals – The Arable Event, Webinar – Succession Planning</p>
      </div>
      <img
        className="speaking-photo-1"
        src={require('../images/speaking_img.jpg')}
        alt="woman and dog"
      />
    </div>
  );
};

export default SpeakingPage;
