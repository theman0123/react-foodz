import { combineReducers } from 'redux';
import notes from './notes.js';
import places from './places.js';
import user from './user.js';

const reducer = combineReducers({
  notes,
  places,
  user
});

export default reducer;
