import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { v4 } from 'uuid';
import Header from '../Header/Header';



const App = () => (
  <BrowserRouter>
  <Header />
  <Switch>
    <Route exact path="/" render={() => <Landing /> } />
    <Route component={Error404} />
  </Switch>
  </BrowserRouter>
)

export default App;
