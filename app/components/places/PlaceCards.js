import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Panel } from 'react-bootstrap';

import myStyles from '../../myStyles.css';

import text from 'bootstrap-css-modules/css/text.css';

const panelStyling = `${myStyles.backgroundRed} ${myStyles.textWhite} ${myStyles.point} ${text.textCenter}`;
const starsS = `${text.textCenter}`;


export default class PlaceCards extends Component {
  render() {
    const title = (
      <h1 className={myStyles.textMd}>{this.props.name}</h1>
  );
    return (
      <Panel className={panelStyling} header={title}>
          <h4>{this.props.address}</h4>

          <hr/>

          <div className={starsS}>
            {this.props.stars} stars
          </div>
        </Panel>
    );
  }
}

PlaceCards.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  stars: PropTypes.string,
};
