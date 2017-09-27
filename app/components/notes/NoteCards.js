import React, { Component } from 'react';

import { Panel } from 'react-bootstrap';

import myStyles from '../../myStyles.css';

import text from 'bootstrap-css-modules/css/text.css';
import display from 'bootstrap-css-modules/css/display.css';
import marginLeft from 'bootstrap-css-modules/css/marginLeft.css';

const titleS = `${display.dFlex}`;
const starsS = `${marginLeft.mlAuto}`;
const panelStyling = `${myStyles.backgroundRed} ${myStyles.textWhite} ${myStyles.point}`;

export default class NoteCards extends Component {
  constructor(props) {
    super(props);

    this.state = {foo: 'bar'};
  };

  render() {
    const title = (
    <div className={titleS}>
      <div>Hamburger</div>
      <div className={starsS}>5 stars</div>
    </div>
  );
    const description = (
    <h4>start of description...</h4>
  );
    return (
      <Panel className={panelStyling} header={title}>
        {description}
      </Panel>
    );
  }
}
