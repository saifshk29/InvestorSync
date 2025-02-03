import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Routes";

function App() {
  

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;