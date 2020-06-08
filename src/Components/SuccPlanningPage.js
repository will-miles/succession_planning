import React from 'react';
import './SuccPlanningPage.css';

const SuccPlanningPage = () => {
  return (
    <div className="succPlanningPage">
      <div className="spSection1">
        <div className="spBody1">
          <h3 className="orangeText title">Succession Planning</h3>
          <p>
            The topic of Succession within family businesses would on the
            outside appear innocuous – but this is very often not the case. How
            can it be that a strong family unit can find itself torn apart by
            the very thing that will bring them security, resilience and unlock
            potential for the future success of the business and all involved?
            Whilst families work and live together they can struggle to address
            ‘the elephant in the room’, for example
            <br />
          </p>
          <ul className="reasonList">
            <li>
              When will Grandad/Dad/Mum start to let go and give me a chance?
            </li>
            <li>
              Will I ever be paid for the work have put into the business?
            </li>
            <li>
              How do I tell my parents I don’t want to work in this business?
            </li>
            <li>
              My eldest sibling doesn’t want to join the business – but I do!
            </li>
            <li>
              How can I divide the assets fairly when not all my children want
              to work in the business?
            </li>
            <li>
              What do I do with the business if the next generation don’t want
              to take it on?
            </li>
          </ul>
        </div>
        <img
          className="spPhoto1"
          src="https://images.unsplash.com/photo-1588641750012-474003b37f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
          alt="woman and dog"
        />
      </div>
      <div className="spSection2">
        <img
          className="spPhoto2"
          src="https://images.unsplash.com/photo-1588641750012-474003b37f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
          alt="woman and dog"
        />
        <p className="spBody2">
          For a confidential discussion on how to ‘Get the Conversation Started’
          and get the family round the table to achieve an agreed Succession
          Plan contact Becky – all details on the contact page.
        </p>
      </div>
    </div>
  );
};

export default SuccPlanningPage;
