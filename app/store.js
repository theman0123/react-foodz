import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import notes from './reducers/notes.js';

//import user from './reducers/user.js';

const reducer = combineReducers({
  notes,
//  user
});

const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducer, middleware);

store.dispatch({type: 'NEW_NOTE'})