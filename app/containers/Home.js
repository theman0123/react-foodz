import React, { Component } from 'react';

import Filter from '../components/places/Filter.js';
import PlacesForm from '../components/places/PlacesForm.js';
import PlaceCards from '../components/places/PlaceCards.js';

import myStyles from '../myStyles.css';

import text from 'bootstrap-css-modules/css/text.css';
import position from 'bootstrap-css-modules/css/position.css';
import type from 'bootstrap-css-modules/css/type.css';

import {newPlace} from '../actions/places.js';

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
        visited: false
      },
      showForm: false,
    };
  };

  close() {
    this.setState({ showForm: false });
  }

  open() {
    this.setState({ showForm: true });
  }
  
//  const mapDispatchToProps = dispatch => {
//  return {
//    onPlaceClick: id => {
//      dispatch(newPlace(id))
//    }
//  }
//}
//     dispatch(newPlace('5', 'chilis', '234 s. 234 n., slc, ut 84111', '5', '2', 'urlphoto', ['tacos', 'burritos']))
  render() {
    return (
      <div>
        <div><Filter /></div>
      
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

        <PlacesForm
          showForm={this.state.showForm}
          close={this.close.bind(this)} 
        />
            
      </div>
    );
  }
};