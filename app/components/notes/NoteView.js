import React, { Component } from 'react';

import { Modal, Button } from 'react-bootstrap';

import NoteCards from './NoteCards.js';

import display from 'bootstrap-css-modules/css/type.css';
import text from 'bootstrap-css-modules/css/text.css';
import margin from 'bootstrap-css-modules/css/margin.css';
import flex from 'bootstrap-css-modules/css/flex.css';

import myStyles from '../../myStyles.css';

const modalBS = `${flex.flexRow} ${myStyles.backgroundRed}`;
const login = `${myStyles.textPlain} ${display.display4} ${text.textCenter} ${myStyles.point}`;

export default class NoteView extends Component {
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
    const PlaceTitle = 'Chilis';
    const noteTitle = (
      <div> 
        <div>likes</div>
        <div>Chilis</div>
        <div>Hamburger</div>
        <div>stars</div>
      </div>
    );
    const description = (
      <div>
        <div>Best Hamburger EVER!!!</div>
        <div>photo here</div>
      </div>
    );
    return (
      <div>
        <div onClick={this.open.bind(this)}>
          <NoteCards />
        </div>

        <Modal
            show={this.state.showModal} onHide={this.close.bind(this)}
            >

            <Modal.Header className={myStyles.backgroundGrey}closeButton>
              <Modal.Title>{noteTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body className={modalBS}>
              {description}
            </Modal.Body>

            <Modal.Footer>
              <Button bsStyle="danger" className={margin.m1} onClick={this.close.bind(this)}>cancel</Button>
              <Button bsStyle="info" className={margin.m1}>submit</Button>
             </Modal.Footer>
          </Modal>
      </div>
    );
  }
};
