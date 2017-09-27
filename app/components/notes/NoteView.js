import React, { Component } from 'react';

import { Modal, Button, Image, Col, Grid, Row } from 'react-bootstrap';

import NoteCards from './NoteCards.js';

import display from 'bootstrap-css-modules/css/display.css';
import text from 'bootstrap-css-modules/css/text.css';
import margin from 'bootstrap-css-modules/css/margin.css';
import flex from 'bootstrap-css-modules/css/flex.css';

import myStyles from '../../myStyles.css';

const modalBS = `${display.dFlex} ${myStyles.backgroundRed}`;
const modalRed = `${myStyles.textWhite} ${margin.m3} ${myStyles.textMd}`;
const modalGrey = `${display.dFlex} ${flex.flexRow}`;
const noteTitle = `${text.textCenter} ${myStyles.textMd}`;

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
    const noteHeader = (
      <div>
        <div className={modalGrey}>
          <Col xs={4}>
            <span className={myStyles.textGreen}>3</span>
            likes</Col>
          <Col xs={4} className={text.fontItalic}>{PlaceTitle}</Col>
          <Col xs={4}>
            <span className={myStyles.textGreen}>3</span>
            stars</Col>
        </div>
      <hr/>
      <div className={noteTitle}>Hamburger</div>
      </div>
    );
    const description = (
      <Grid>
        <Row>
          <div className={modalRed}>Best Hamburger EVER!!! order with extra sauce. this stuff is so good. this is a bad review</div>
        </Row>
        <Col xs={12} md={6}><Image src="http://www.inspiredtaste.net/wp-content/uploads/2016/08/Easy-Homemade-Hamburger-Recipe-2-1200.jpg" className={myStyles.noteImage} rounded /></Col>
      </Grid>
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
              <Modal.Title>{noteHeader}</Modal.Title>
            </Modal.Header>

            <Modal.Body className={modalBS}>
              {description}
            </Modal.Body>

          </Modal>
      </div>
    );
  }
};
