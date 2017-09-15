import React, { Component } from 'react';

import Login from './navbar/Login';
import Signup from './navbar/Signup';
import FoodzLogo from './FoodzLogo';

import { row } from 'bootstrap-css-modules/css/row.css';
import { col12, col3 } from 'bootstrap-css-modules/css/columns.css';
import { mt5 } from 'bootstrap-css-modules/css/marginTop.css';
import { mx3 } from 'bootstrap-css-modules/css/marginX.css';
import { my5 } from 'bootstrap-css-modules/css/marginY.css';
import { container } from 'bootstrap-css-modules/css/container.css';

const lognSign = `${container} ${col12}`;
const smContainer = `${col3} ${mt5}`;
const foodzContainer = `${col3} ${my5} ${mx3}`;

export default class Landing extends Component {
  render() {
    return (
      <div className={lognSign}>
        <div className={row}>
          <div className={smContainer}>
            <Login />
          </div>
        </div>
          <div className={row}>
            <div className={smContainer}>
              <Signup />
            </div>
          </div>
        <div className={foodzContainer}>
          <FoodzLogo />
        </div>
      </div>
    );
  }
};
