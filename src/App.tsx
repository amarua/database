import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import './css/materialize.min.css';
import './css/App.global.css';
const Hello = () => {
  return (
    <React.Fragment>
      <Home/>
    </React.Fragment>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
