import React, { Component } from 'react';
import PropTypes from 'prop-types';

import text from 'bootstrap-css-modules/css/text.css';

import myStyles from '../../myStyles.css';

const view = `${text.textCenter} ${myStyles.textLrg} ${myStyles.mRight}`;

export default class View extends Component {
  render() {
    return (
      <div className={view}>
        {this.props.view}
      </div>
    );
  }
};

View.propTypes = {
  view: PropTypes.string,
};
