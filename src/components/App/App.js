import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

const App = () => (
  <BrowserRouter>
  <Header />
  <Switch>
    <Route exact path="/" render={() => } />
    <Route component={Error404} />
  </Switch>
  </BrowserRouter>
)

export default App;
