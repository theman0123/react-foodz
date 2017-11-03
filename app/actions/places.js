import fetch from 'isomorphic-fetch';
import { CALL_API } from '../middleware/api.js';

//actions

export const FETCH_PLACES = 'FETCH_PLACES';
export const NEW_PLACE = 'NEW_PLACE';
export const EDIT_PLACE = 'EDIT_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';
export const VISIBILITY_FILTER = 'VISIBILITY_FILTER';

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})


export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'
////////example
// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
//////const fetchUser = login => ({
//  [CALL_API]: {
//    types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
//    endpoint: `users/${login}`,
//    schema: Schemas.USER
//  }
//})



//action creators

export const fetchPlaces = (lat, lon) => ({
  [CALL_API]: {
    types: [PLACES_REQUEST, PLACES_SUCCESS, PLACES_FAILURE],
    lat,
    lon,
//    endpoint: `developers.zomato.com/api/v2.1/search?lat={lat}&lon={lon}`,
//    headers: {"X-Zomato-API-Key": "451e00ec0a1c87145925d326a5319666"},
//    schema: Schemas.PLACES
  }
});

export function newPlace(id, placeName, address, likes, stars, photo, categories) {
  return {
    type: NEW_PLACE,
    id,
    placeName,
    address,
    likes,
    stars,
    photo,
    categories,
  };
};

export function editPlace(id, placeName, address, likes, stars, photo, categories) {
  return {
    type: EDIT_PLACE,
    id,
    placeName,
    address,
    likes,
    stars,
    photo,
    categories,
  };
};

export function deletePlace(id) {
  return { type: DELETE_PLACE, id};
};

export function visibilityFilter(filter) {
  return { type: VISIBILITY_FILTER, filter };
};
