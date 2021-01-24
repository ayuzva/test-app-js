import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Issues from './components/Issues';
import Login from './components/Login/Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Header />
      <Router>
          <Switch>
            <Route exact path="/">
              <Issues />
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
