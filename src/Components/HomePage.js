import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="section1">
        <h4>
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
          Becky, born on a small family dairy farm in Devon, has had Agriculture
          at the core of her career from Grain Trading to mixed farming in
          Portugal. She understands that Family businesses, whilst they can be
          complex, are a tightly woven team that supports each other and takes
          enormous pride in the achievements of each individual and the business
          as a whole.
          <br />
          To protect the business and the family it is vital that an agreed
          Succession Plan is put in place.
          <br />
          <b>R</b> – Realise the potential of each family member
          <br />
          <b>A</b> – Align family vision for the future
          <br />
          <b>P</b> – Progress the business with the security a Succession Plan
          provides
          <br />
          <b>P</b> – Protection, the business has a future
          <br />
          <b>O</b> – Ownership by the whole family of the Succession Plan
          <br />
          <b>R</b> – Reassurance provided by the knowledge you are all in
          agreement
          <br />
          <b>T</b> – Trust reinforced within the family for a secure future
        </p>
      </div>
      <img
        className="section2"
        src="https://images.unsplash.com/photo-1588641750012-474003b37f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        alt="woman and dog"
      />
    </div>
  );
};

export default HomePage;
