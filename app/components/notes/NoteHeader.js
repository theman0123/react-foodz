import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';

import display from 'bootstrap-css-modules/css/display.css';
import text from 'bootstrap-css-modules/css/text.css';
import flex from 'bootstrap-css-modules/css/flex.css';

import myStyles from '../../myStyles.css';

const modalGrey = `${display.dFlex} ${flex.flexRow}`;
const noteTitle = `${text.textCenter} ${myStyles.textMd}`;

export default class NoteHeader extends Component {
  render() {
    return (
      <div>
        <div className={modalGrey}>
          <Col xs={4}>
            <span className={myStyles.textGreen}>{this.props.likes}</span>
            likes
          </Col>
          <Col xs={4} className={text.fontItalic}>{this.props.placeName}
          </Col>
          <Col xs={4}>
            <span className={myStyles.textGreen}>{this.props.stars}</span>
            stars
          </Col>
        </div>
        <hr/>
        <div className={noteTitle}>{this.props.title}</div>
      </div>
    );
  }
}

NoteHeader.propTypes = {
  likes: PropTypes.number,
  placeName: PropTypes.string,
  stars: PropTypes.number,
  title: PropTypes.string,
};
