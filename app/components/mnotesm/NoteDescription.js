import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image, Col, Grid, Row } from 'react-bootstrap';

import margin from 'bootstrap-css-modules/css/margin.css';

import myStyles from '../../myStyles.css';

const modalRed = `${myStyles.textWhite} ${margin.m3} ${myStyles.textMd}`;

export default class NoteDescription extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <div className={modalRed}>{this.props.description}
          </div>
        </Row>
        <Col xs={12} md={6}><Image src={this.props.image} className={myStyles.noteImage} rounded />
        </Col>
      </Grid>
    );
  }
}

NoteDescription.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
};
