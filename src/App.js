import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Issues from './components/Issues';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            <Route exact path="/issues">
              <Issues />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
