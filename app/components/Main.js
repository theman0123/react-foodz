import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NoteView from '../containers/NoteView.js';
import Home from '../containers/Home.js';
import NavBar from '../containers/NavBar.js';
import About from '../containers/About.js';

import { flexColumn } from 'bootstrap-css-modules/css/flex.css';

const fatherContainer = `${flexColumn}`;

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        placeName: 'Olive Garden',
      }
    };
  }

  render() {
    return (
      <main className={fatherContainer}>
        <NavBar
          placeName={this.state.note.placeName}
        />
        <Switch>
            <Route exact path="/home" component= { Home } />
            <Route exact path="/notes" component= { NoteView } />
            <Route exact path="/about" component={ About } />
        </Switch>
      </main>
    );
  }
}
