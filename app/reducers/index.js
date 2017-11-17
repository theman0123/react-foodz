import { combineReducers } from 'redux';

import notes from './notes.js';
import places from './places.js';
import user from './user.js';
import fetch from './fetch.js';

const reducer = combineReducers({
  notes,
  places,
  user,
  fetch
});

export default reducer;
//see places.js for root reducer//
