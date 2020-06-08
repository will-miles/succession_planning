import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SuccPlanningPage from './Components/SuccPlanningPage';
// import VitaProfilingPage from './Components/VitaProfilingPage';
import SpeakingPage from './Components/SpeakingPage';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <Header className="header" />
      <Router className="body">
        <HomePage path="/" />
        <SuccPlanningPage path="/succession-planning" />
        {/* <VitaProfilingPage path="/vita-profiling" /> */}
        <speaking-page path="/speaking" />
        <ContactPage path="/contact" />
      </Router>
      <Footer className="footer" />
    </div>
  );
}

export default App;
