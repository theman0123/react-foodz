import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import ModalTest from './home/modalTest.js'

import PlaceCards from './home/PlaceCards.js';

import myStyles from '../myStyles.css';

import text from 'bootstrap-css-modules/css/text.css';
import position from 'bootstrap-css-modules/css/position.css';
import type from 'bootstrap-css-modules/css/type.css';

const newRestText = `${text.textCenter} ${position.fixedBottom} ${myStyles.point}`;
const exploreS = `${text.textCenter} ${text.fontItalic} ${type.h4}`;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: {
        address: 'Address Here',
        name: 'Olive Garden',
        stars: '3',
      },
      showModal: false,
    };
  };

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <div className={exploreS}>
          Explore
        </div>

        <PlaceCards
          address={this.state.place.address}
          name={this.state.place.name}
          stars={this.state.place.stars}
        />

        <div onClick={this.open.bind(this)} className={newRestText}>
          New Restaurant
        </div>

        <ModalTest 
          show={this.state.showModal}
          close={this.close.bind(this)} 
          title="yummy"
          likes='5'
          description='thisplacesucks'
          placeName={this.state.place.name}
          />
            
      </div>
    );
  }
};
