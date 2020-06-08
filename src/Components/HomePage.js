import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-body">
        <h4 className="orange-text title">
          Welcome to Rapport By Design
          <br />
          Family Business Succession Planning
        </h4>
        <p>
          Created by Becky Miles, a fully trained Family Succession Plan
          Facilitator, to provide a professional, confidential and above all
          compassionate service for families to guide and support them to a
          Succession Plan that delivers for the whole family.
          <br />
          <br />
          Becky, born on a small family dairy farm in Devon, has had Agriculture
          at the core of her career from Grain Trading to mixed farming in
          Portugal. She understands that Family businesses, whilst they can be
          complex, are a tightly woven team that supports each other and takes
          enormous pride in the achievements of each individual and the business
          as a whole.
          <br />
          <br />
          To protect the business and the family it is vital that an agreed
          Succession Plan is put in place.
          <br />
          <br />
          <b className="orange-text">R</b> – Realise the potential of each
          family member
          <br />
          <b className="orange-text">A</b> – Align family vision for the future
          <br />
          <b className="orange-text">P</b> – Progress the business with the
          security a Succession Plan provides
          <br />
          <b className="orange-text">P</b> – Protection, the business has a
          future
          <br />
          <b className="orange-text">O</b> – Ownership by the whole family of
          the Succession Plan
          <br />
          <b className="orange-text">R</b> – Reassurance provided by the
          knowledge you are all in agreement
          <br />
          <b className="orange-text">T</b> – Trust reinforced within the family
          for a secure future
        </p>
      </div>
      <img
        className="home-photo"
        src={require('../images/home_img.jpg')}
        alt="family_parking"
      />
    </div>
  );
};

export default HomePage;
