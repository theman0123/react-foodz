import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

import FormBody from './FormBody.js';

import display from 'bootstrap-css-modules/css/display.css';
import flex from 'bootstrap-css-modules/css/flex.css';
import myStyles from '../../../myStyles.css';

const modalBS = `${display.dFlex} ${flex.flexColumn} ${myStyles.backgroundRed}`;

export default class MNForM extends Component {
  
  saveNote(e) {
    console.log('NoteSaved');
  }
  addPhoto(e) {
    console.log('add a photo button clicked');
  }
  
  render() {
    return (
      <Modal
        show={this.props.showForm} 
        onHide={this.props.close}
      >

        <Modal.Header className={myStyles.backgroundGrey}closeButton>

          <Modal.Title>
            {this.props.newNoteTitle}
          </Modal.Title>
        </Modal.Header>

          <Modal.Body className={modalBS}>
            <FormBody
              newNoteTitle={this.props.newNoteTitle}
              onChange={this.props.onChange}
            />
      
            <Button bsStyle="info" onClick={this.addPhoto.bind(this)}>
              Add Photo
            </Button>
            <Button bsStyle="success" onClick={this.saveNote.bind(this)}>
              Save
            </Button>
          </Modal.Body>

      </Modal>
    );
  };
}

MNForM.propTypes = {
  showForm: PropTypes.bool,
  close: PropTypes.func,
  newNoteTitle: PropTypes.string,
  onChange: PropTypes.func,
};
