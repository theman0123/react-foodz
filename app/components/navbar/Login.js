import React from 'react';

import { display4 } from 'bootstrap-css-modules/css/type.css';
import { textCenter } from 'bootstrap-css-modules/css/text.css';
import { modalHeader, modalBody, modalFooter } from 'bootstrap-css-modules/css/modal.css';
import { btn, btnPrimary } from 'bootstrap-css-modules/css/buttons.css';

import { textPlain, spawn } from '../../myStyles.css';

import { Modal, Button } from 'react-bootstrap';

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
          className={spawn} show={this.state.showModal} onHide={this.close.bind(this)}
          >
          
          <Modal.Header className={modalHeader} closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body className={modalBody}>
            One fine body...
          </Modal.Body>

          <Modal.Footer className={modalFooter}>
            <Button className={btn}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
      );
  };
}
