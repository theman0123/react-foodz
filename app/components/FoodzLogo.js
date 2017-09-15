import React from 'react';
import { NavLink } from 'react-router-dom';

import { display3 } from 'bootstrap-css-modules/css/type.css';
import { textDanger } from 'bootstrap-css-modules/css/text.css';
import { textPlain } from '../myStyles.css';

const FoodzLogo = () => (
  <NavLink to="/Foodz" className={`${display3} ${textPlain}`} activeClassName={`${textDanger}`}>
    Foodz
  </NavLink>
);
export default FoodzLogo;
