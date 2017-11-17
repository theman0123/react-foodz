import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/places.js';
import api from './middleware/api.js';

const middleware = applyMiddleware(thunk, api, logger);


const store = createStore(rootReducer, middleware);

export default store;

//const configureStore = preloadedState => {
//  const store = createStore(
//    rootReducer,
//    preloadedState,
//    compose(
//      applyMiddleware(thunk, api, createLogger()),
//      DevTools.instrument()
//    )
//  )
