import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Overall from './pages/Overall/Overall';


const App = () => (
  <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/overall" component={Overall} />
      </div>
  </Router>
  );

export default App;

