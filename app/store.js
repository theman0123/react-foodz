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

store.dispatch({type: 'NEW_NOTE',
                id: '123',
                placeId: '543',
                title: 'chickenTacos',
                foodDetails: 'Awesome',
                show: true,
                likes: 4,
                stars: 3,
                photo: 'somephoto',
                tags: ['tacos', 'local', 'foodmania']
               })
store.dispatch({type: 'DELETE_NOTE', id: '123'})

export default store;