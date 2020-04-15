import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ContactPage from './components/Contact';

import './App.scss';

function App() {
  // const API_URL = 'https://api.covid19api.com/';

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
