import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Panel } from 'react-bootstrap';

import myStyles from '../../myStyles.css';

import display from 'bootstrap-css-modules/css/display.css';
import marginLeft from 'bootstrap-css-modules/css/marginLeft.css';

const titleS = `${display.dFlex}`;
const starsS = `${marginLeft.mlAuto}`;
const panelStyling = `${myStyles.backgroundRed} ${myStyles.textWhite} ${myStyles.point}`;

export default class NoteCards extends Component {
  render() {
    const title = (
    <div className={titleS}>
      <div>{this.props.title}</div>
      <div className={starsS}>{this.props.stars} stars</div>
    </div>
  );
    const description = (
    <h4>{this.props.description}</h4>
  );
    return (
      <Panel className={panelStyling} header={title}>
        {description}
      </Panel>
    );
  }
}

NoteCards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.string,
};
