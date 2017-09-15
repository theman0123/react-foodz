import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Display from './Display.js';
import Home from './Home.js';
import NavBar from './NavBar.js';
import About from './About.js';

import { flexColumn } from 'bootstrap-css-modules/css/flex.css';

const fatherContainer = `${flexColumn}`;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {test: 'Main'};
  }

  render() {
    return (
      <main className={fatherContainer}>
        <NavBar />
        <Switch>
            <Route exact path="/home" component= { Home } />
            <Route exact path="/display" component= { Display } />
            <Route exact path="/about" component={ About } />
        </Switch>
      </main>
    );
  }
}
