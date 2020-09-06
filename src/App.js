import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUP from "./Views/SignUP.js";
import Login from "./Views/Login.js";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUP} />
            <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
