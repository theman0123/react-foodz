import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/Landing.js';
import Main from './components/Main.js';

import { m3 } from 'bootstrap-css-modules/css/margin.css';
import { bgFaded } from 'bootstrap-css-modules/css/background.css';

import { vh100, absContainer, vw75 } from './myStyles.css';

const fatherContainer = `${absContainer} ${m3} ${vh100} ${bgFaded} ${vw75}`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {test: 'App'};
  }

  render() {
    return (
      <div className={fatherContainer}>
        <Switch>
          <Route exact path="/landing" component={ Landing } />
          <Route path="/" component={ Main } />
        </Switch>
      </div>
    );
  }
}
