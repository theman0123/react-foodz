import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../components/places/Filter.js';
import PlacesForm from '../components/places/PlacesForm.js';
import PlaceCards from '../components/places/PlaceCards.js';
import VisiblePlaces from './getVisiblePlaces.js'; 
import { shouldFetchPlaces } from '../actions/places.js';

import myStyles from '../myStyles.css';

import text from 'bootstrap-css-modules/css/text.css';
import position from 'bootstrap-css-modules/css/position.css';
import type from 'bootstrap-css-modules/css/type.css';

const newRestText = `${text.textCenter} ${position.fixedBottom} ${myStyles.point}`;
const exploreS = `${text.textCenter} ${text.fontItalic} ${type.h4}`;

const loadData = ({shouldFetchPlaces}) => {
  shouldFetchPlaces();
}

class Home extends Component {
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
  
  
  componentWillMount() {
    loadData(this.props)
  }

  close() {
    this.setState({ showForm: false });
  }

  open() {
    this.setState({ showForm: true });
  }
  

  render() {
    const places = () => {  
      const {entities, ids} = this.props
      const placeObj = entities.places;
      const idsArray = ids.ids;

      return idsArray.map( id => {
//        console.log(placeObj[id])
        return ( 
          <PlaceCards
            address={placeObj[id].restaurant.location.address}
            name={placeObj[id].restaurant.name}
            stars={placeObj[id].restaurant.userRating.aggregateRating}
          />
        )
      })
    }
    const run = console.log(places())
//    places()
    return (
      <div>
        <div><Filter /></div>

        <div className={exploreS}>
          Explore
        </div>
      
        {places()}
      
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
//        <PlaceCards
//          address={this.state.place.name}
//          name={this.state.place.name}
//          stars={this.state.place.stars}
//        />

const mapStateToProps = state => {
  const {
    pagination: { places },
    entities
  } = state;

  const ids = places.PLACES_SUCCESS;

  return {
    entities,
    ids
  };
};

export default connect(mapStateToProps, {
  shouldFetchPlaces,
})(Home);
