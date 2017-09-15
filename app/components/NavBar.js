import React, { Component } from 'react';

import Login from './navbar/Login';
import Signup from './navbar/Signup';
import FoodzLogo from './FoodzLogo';

import { container } from 'bootstrap-css-modules/css/container.css';
import { row } from 'bootstrap-css-modules/css/row.css';
import { col3, colSm10, colSm3, colSm2, colSm4, col4, col12, col6, colSmAuto, colAuto } from 'bootstrap-css-modules/css/columns.css';
import { display1, display4, lead } from 'bootstrap-css-modules/css/type.css';
import { justifyContentCenter, justifyContentBetween, justifyContentStart } from 'bootstrap-css-modules/css/justify.css';
import { textCenter, textRight } from 'bootstrap-css-modules/css/text.css';
import { mt5, mt4 } from 'bootstrap-css-modules/css/marginTop.css';
import { offset3 } from 'bootstrap-css-modules/css/offset.css';
import { mx4, mx5 } from 'bootstrap-css-modules/css/marginX.css';
import { m5 } from 'bootstrap-css-modules/css/margin.css';
import { absContainer } from '../myStyles.css';

import { Button } from 'react-bootstrap';

const headerC = `${absContainer} ${col12}  ${justifyContentStart}`;
const smContainer = ` ${col3}`;
const signup = `${textCenter}`;
const foodzContainer = `${mx4}`;

class NavBar extends Component {
  render() {
    return (
     <div>
       this is the NavBar
      <Button bsStyle="primary"> Hi </Button>
     </div>
    );
  }
}
export default NavBar;
