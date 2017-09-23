import React from 'react';

import {lead} from 'bootstrap-css-modules/css/type.css';
import { modalHeader } from 'bootstrap-css-modules/css/modal.css';
import { btn, btnPrimary, btnWarning, btnInfo } from 'bootstrap-css-modules/css/buttons.css';
import { m2 } from 'bootstrap-css-modules/css/margin.css';
import { flexRow } from 'bootstrap-css-modules/css/flex.css';
import { roundedBottom } from 'bootstrap-css-modules/css/borders.css';

import { textPlain, spawn, modalClose, padL25cents } from '../../myStyles.css';

import { Modal } from 'react-bootstrap';

const modalCS = `${spawn} ${roundedBottom}`;
const modalBS = `${flexRow} ${m2} ${roundedBottom}`;
const signupS = `${lead} ${textPlain} ${lead}`;
const fbS = `${btn} ${btnPrimary} ${m2}`;
const googleS = `${btn} ${btnWarning} ${m2}`;
const twitterS = `${btn} ${btnInfo} ${m2}`;

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <div className={signupS} onClick={this.open.bind(this)}>
          signup.
        </div>

        <Modal
          className={modalCS} show={this.state.showModal} onHide={this.close.bind(this)}
          >

          <Modal.Header className={modalHeader}>
            <Modal.Title className={padL25cents}>Login</Modal.Title>

          <div className={modalClose} onClick={this.close.bind(this)}>close</div>
          </Modal.Header>

          <Modal.Body className={modalBS}>
            <button className={fbS}>FB</button>
            <button className={googleS}>google</button>
            <button className={twitterS}>twitter</button>
          </Modal.Body>

        </Modal>
      </div>
      );
  };
}
