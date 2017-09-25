import React, { Component } from 'react';

import { Panel } from 'react-bootstrap';

import myStyles from '../../myStyles.css';

import text from 'bootstrap-css-modules/css/text.css';

const panelStyling = `${myStyles.backgroundRed} ${myStyles.textWhite} ${myStyles.point} ${text.textCenter}`;
const starsS = `${text.textCenter}`;


export default class PlaceCards extends Component {
  constructor(props) {
    super(props);

    this.state = {foo: 'bar'};
  };

  render() {
    const title = (
    <h3>Olive Garden</h3>
  );
    const address = (
    <h4>address here</h4>
  );
    return (
      <Panel className={panelStyling} header={title}>
          {address}
          <hr/>
          <div className={starsS}>
            stars here
          </div>
        </Panel>
    )
  }
}
