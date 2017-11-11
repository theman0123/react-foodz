import update from 'immutability-helper';
import visibilityFilter from './visibilityFilter.js';

import * as ActionTypes from '../actions/places.js';
import merge from 'lodash/merge'
import paginate from './paginate'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, places: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

const errorMessage = (state = null, action) => {
  const { type, error } = action
  
  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }
  
  return state;
}

const pagination = combineReducers({
  places: paginate({
    mapActionToKey: action => action.type,
    types: [
      ActionTypes.PLACES_REQUEST,
      ActionTypes.PLACES_SUCCESS,
      ActionTypes.PLACES_FAILURE
    ]
  }),
})
//PAGINATION EXAMPLE
//  stargazersByRepo: paginate({
//    mapActionToKey: action => action.fullName,
//    types: [
//      ActionTypes.STARGAZERS_REQUEST,
//      ActionTypes.STARGAZERS_SUCCESS,
//      ActionTypes.STARGAZERS_FAILURE
//    ]
//  })

const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
})

//ignoring below for now
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
export default rootReducer;
//export default places;
