import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import BusConnection from './components/pages/BusConection/BusConnection.container';
import Home from './components/pages/Home/Home.container';
import Login from './components/pages/Login/Login.container';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/busconnection" exact component={BusConnection} />
      <Route path="/home" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  </Router>
);

export default AppRouter;
