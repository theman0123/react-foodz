import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal, Button, Image, Col, Grid, Row } from 'react-bootstrap';

import display from 'bootstrap-css-modules/css/display.css';
import text from 'bootstrap-css-modules/css/text.css';
import margin from 'bootstrap-css-modules/css/margin.css';
import flex from 'bootstrap-css-modules/css/flex.css';

import myStyles from '../../myStyles.css';

const modalBS = `${display.dFlex} ${myStyles.backgroundRed}`;
const modalRed = `${myStyles.textWhite} ${margin.m3} ${myStyles.textMd}`;
const modalGrey = `${display.dFlex} ${flex.flexRow}`;
const noteTitle = `${text.textCenter} ${myStyles.textMd}`;

export default class ModalTest extends Component {
  render() {
    const noteHeader = (
      <div>
        <div className={modalGrey}>
          <Col xs={4}>
            <span className={myStyles.textGreen}>{this.props.likes}
            </span>
            likes</Col>
          <Col xs={4} className={text.fontItalic}>{this.props.placeName}</Col>
          <Col xs={4}>
            <span className={myStyles.textGreen}>{this.props.stars}</span>
            stars</Col>
        </div>
      <hr/>
      <div className={noteTitle}>{this.props.title}</div>
      </div>
    );
    const description = (
      <Grid>
        <Row>
          <div className={modalRed}>{this.props.description}</div>
        </Row>
        <Col xs={12} md={6}><Image src={this.props.image} className={myStyles.noteImage} rounded /></Col>
      </Grid>
    );
    return (
      <Modal
          show={this.props.show} onHide={this.props.close}
        >

          <Modal.Header className={myStyles.backgroundGrey}closeButton>
            <Modal.Title>{noteHeader}</Modal.Title>
          </Modal.Header>

          <Modal.Body className={modalBS}>
            {description}
          </Modal.Body>

      </Modal>
    );
  };
}

ModalTest.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
};
