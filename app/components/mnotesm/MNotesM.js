import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

import NoteHeader from './NoteHeader.js';
import NoteDescription from './NoteDescription';

import display from 'bootstrap-css-modules/css/display.css';

import myStyles from '../../myStyles.css';

const modalBS = `${display.dFlex} ${myStyles.backgroundRed}`;

export default class MNotesM extends Component {
  render() {
    return (
      <Modal
          show={this.props.show} onHide={this.props.close}
        >

          <Modal.Header className={myStyles.backgroundGrey}closeButton>

            <Modal.Title>
              {<NoteHeader
                title={this.props.title}
                likes={this.props.likes}
                stars={this.props.stars}
                placeName={this.props.placeName}
              />}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className={modalBS}>
            {<NoteDescription
              description={this.props.description}
              image={this.props.image}
            />}
          </Modal.Body>

      </Modal>
    );
  };
}

MNotesM.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
  likes: PropTypes.number,
  placeName: PropTypes.string,
  stars: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string, 
};
