import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomePage} />          
            </Switch>
          </div>
        </Router>

      </>
    );
  }
}

export default App;
