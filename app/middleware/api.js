import { normalize, schema, arrayOf } from 'normalizr'
import { camelizeKeys } from 'humps'

// Extracts the next start position for Zomato API.
const getNewStart = (response, start) => {
  const urlSplit = response.url.split('start=');
  const newStart = start + 20;
  
  const nextUrl = `${urlSplit[0]}start=${newStart}`;
  
  return !newStart ? null : nextUrl;
}

const API_ROOT = 'https://developers.zomato.com/api/v2.1/';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (endpoint, schema, start = 0) => {
  
  const headers = {
    "X-Zomato-API-Key": '451e00ec0a1c87145925d326a5319666'
  }
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint + `&start=${start}`;
  
  
  return fetch(fullUrl, {headers: headers})
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        const camelizedJson = camelizeKeys(json.restaurants)
        const nextPageUrl = getNewStart(response, start)

        return Object.assign({},
          normalize(camelizedJson, schema),
          { nextPageUrl }
        )
      })
    )
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/paularmstrong/normalizr

//const place = new schema.

const placesSchema = new schema.Entity('places', {}, {
  idAttribute: places => places.restaurant.id
});
//placesSchema.define({
//  places: arrayOf(placesSchema)
//});

const userSchema = new schema.Entity('users', {}, {
  idAttribute: user => user.login.toLowerCase()
});

const noteSchema = new schema.Entity('notes', {}, {
  idAttribute: notes => notes.id
});

// Schemas for Github API responses.
export const Schemas = {
//  PLACES: placesSchema,
  PLACES_ARRAY: [placesSchema],
  USER: userSchema,
  USER_ARRAY: [userSchema],
  NOTES: noteSchema,
  NOTES_ARRAY: [noteSchema]
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }));

  return callApi(endpoint, schema).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  );
};
