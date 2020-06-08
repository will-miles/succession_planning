import React from 'react';
import './SpeakingPage.css';

const SpeakingPage = () => {
  return (
    <div className="speakingPage">
      <div className="speakingSection1">
        <h2 className="orangeText title">Speaking</h2>
        <p>
          Becky is available to speak on the topic of Family Succession Planning
          and has delivered well received and engaging presentations at a number
          of events.
        </p>
        <h3 className="orangeText">Recent engagements:</h3>
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
        className="sPhoto1"
        src="https://images.unsplash.com/photo-1588641750012-474003b37f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        alt="woman and dog"
      />
    </div>
  );
};

export default SpeakingPage;
