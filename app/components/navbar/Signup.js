import React from 'react';
import { NavLink } from 'react-router-dom';

import {lead} from 'bootstrap-css-modules/css/type.css';
import { textDanger } from 'bootstrap-css-modules/css/text.css';

import { textPlain } from '../../myStyles.css';

const Signup = () => (
  <NavLink to="/signup" className={`${lead} ${textPlain} ${lead}`} activeClassName={textDanger}>
    signup.
  </NavLink>
);
export default Signup;
