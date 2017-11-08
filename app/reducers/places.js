import update from 'immutability-helper';
//import fetch from 'isomorphic-fetch';
import visibilityFilter from './visibilityFilter.js';

import { RECEIVE_PLACES, REQUEST_PLACES, NEW_PLACE, EDIT_PLACE, DELETE_PLACE, VISIBILITY_FILTER } from '../actions/places.js';

const places = (state={
  byId: {},
  allPlaces: [],
  visibilityFilter
}, action) => {
  switch(action.type) {
    case 'REQUEST_PLACES':
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        location: action.location
      }
    case 'RECEIVE_PLACES': {
      return update(state, {
//        byId: {
//          [action.id]: {
//            $set: {
//              id: action.id,
//              placeName: action.placeName,
//              address: action.address,
//              likes: action.likes,
//              stars: action.stars,
//              photo: action.photo,
//              categories: action.categories}}},
        allPlaces: {$push: [action.places[0].restaurant.id]},
        isFetching: {$set: false},
        didInvalidate: {$set: false},
        lastUpdated: {$set: action.receivedAt},
      });
    }
    case 'NEW_PLACE': {
      return update(state, {
        byId: {
          [action.id]: {
            $set: {
              id: action.id,
              placeName: action.placeName,
              address: action.address,
              likes: action.likes,
              stars: action.stars,
              photo: action.photo,
              categories: action.categories}}},
        allPlaces: {$push: [action.id]}
        });
    }
    case 'EDIT_PLACE': {
      let findPlace;
      if (!Array.prototype.includes) {
        findPlace = state.allPlace.filter(placeId => placeId === action.id);
      }
      if (state.allPlaces.includes(action.id) || findPlace) {
        return update(state, {
          byId: {
            [action.id]: {
              $set: {
                id: action.id,
                placeName: action.placeName,
                address: action.address,
                likes: action.likes,
                stars: action.stars,
                photo: action.photo,
                categories: action.categories}}}});
      }
      return state;
      }
      case 'DELETE_PLACE': {
        return update(state, {
          byId: {
            [action.id]: { $set: null }},
          allPlaces: {
            $apply: allPlaces => allPlaces.filter(placeId => placeId !== action.id)
          }
        });
      }
    default: return state; 
  }
};

export default places;
