import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Logo';
import Nav from './Components/Nav';
import HomePage from './Components/HomePage';
import SuccPlanningPage from './Components/SuccPlanningPage';
import VitaProfilingPage from './Components/VitaProfilingPage';
import SpeakingPage from './Components/SpeakingPage';
import ContactPage from './Components/ContactPage';

function App() {
  return (
    <div className="App">
      <Header className="homeIcon" />
      <Nav className="Nav" />
      <Router className="Body">
        <HomePage path="/" />
        <SuccPlanningPage path="/succession-planning" />
        <VitaProfilingPage path="/vita-profiling" />
        <SpeakingPage path="/speaking" />
        <ContactPage path="/contact" />
      </Router>
    </div>
  );
}

export default App;
