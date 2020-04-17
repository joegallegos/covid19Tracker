import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import StatesPage from './components/StatesPage';
import ContactPage from './components/Contact';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/states" component={StatesPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
