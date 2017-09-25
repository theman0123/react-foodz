import React, { Component } from 'react';

import PlaceCards from './home/PlaceCards.js';


import myStyles from '../myStyles.css';

import text from 'bootstrap-css-modules/css/text.css';
import position from 'bootstrap-css-modules/css/position.css';
import type from 'bootstrap-css-modules/css/type.css';

const newRestText = `${text.textCenter} ${position.fixedBottom} ${myStyles.point}`;
const exploreS = `${text.textCenter} ${text.fontItalic} ${type.h4}`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {foo: 'bar'};
  };

  render() {
    return (
      <div>
        <div className={exploreS}>
          Explore
        </div>

        <PlaceCards />

        <div className={newRestText}>
          New Restaurant
        </div>
      </div>
    );
  }
};
