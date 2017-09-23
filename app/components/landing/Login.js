import React from 'react';

import { display4 } from 'bootstrap-css-modules/css/type.css';
import { textCenter } from 'bootstrap-css-modules/css/text.css';
import { m1 } from 'bootstrap-css-modules/css/margin.css';
import { flexRow } from 'bootstrap-css-modules/css/flex.css';
import { textPlain, spawn, backgroundRed, backgroundGrey } from '../../myStyles.css';

import { Modal, Button } from 'react-bootstrap';

const modalBS = `${flexRow} ${backgroundRed}`;
const login = `${textPlain} ${display4} ${textCenter}`;

export default class Login extends React.Component {
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
        <div className={login} onClick={this.open.bind(this)}>
          login
        </div>

        <Modal
          className={spawn}
          show={this.state.showModal} onHide={this.close.bind(this)}
          >

          <Modal.Header className={backgroundGrey}closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body className={modalBS}>
            <Button bsStyle="primary" className={m1}>facebook</Button>
            <Button bsStyle="danger" className={m1}>google</Button>
            <Button bsStyle="info" className={m1}>twitter</Button>
          </Modal.Body>

        </Modal>
      </div>
      );
  };
}
