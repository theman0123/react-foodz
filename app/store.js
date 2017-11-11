import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers/places.js';
import reducer from './reducers/index.js';
import api from './middleware/api.js';

const middleware = applyMiddleware(thunk, api, logger);


//const configureStore = preloadedState => {
//  const store = createStore(
//    rootReducer,
//    preloadedState,
//    compose(
//      applyMiddleware(thunk, api, createLogger()),
//      DevTools.instrument()
//    )
//  )

const store = createStore(
  rootReducer, middleware);
export default store;


//store.dispatch({type: 'FETCH_PLACES'})

/*
//PLACE
store.dispatch({type: 'NEW_PLACE',
                id: '123',
                placeName: 'Chilis',
                address: '234 n. 234 s., slc, ut, 84111',
                likes: 4,
                stars: 3,
                photo: 'somephoto',
                categories: ['tacos', 'local', 'foodmania']
               })
store.dispatch({type: 'EDIT_PLACE',
                id: '123',
                placeName: 'Wallabys',
                address: '543 n. 234 s., slc, ut, 23849',
                likes: '4',
                stars: '3',
                photo: 'edited',
                categories: ['tacos', 'local', 'edited']
               })
store.dispatch({type: 'DELETE_PLACE', id: '123'})

//NOTES
store.dispatch({type: 'NEW_NOTE',
                id: '123',
                placeId: '543',
                ownerId: '999',//=userId
                title: 'boring',
                foodDetails: 'static',
                show: false,
                likes: '4',
                stars: '3',
                photo: 'original',
                tags: ['burritos', 'local', 'edited']
               })

store.dispatch({type: 'EDIT_NOTE',
                id: '123',
                placeId: '543',
                ownerId: '999',
                userId: '999',
                title: 'different',
                foodDetails: 'changed',
                show: true,
                likes: '4',
                stars: '3',
                photo: 'edited',
                tags: ['tacos', 'local', 'edited']
               })
store.dispatch({type: 'DELETE_NOTE', id: '123', userId: '999'})

//LOGIN/OUT
store.dispatch({type: 'LOG-IN',
                id: '999',
                username: 'something lame',
                avatar: 'dunno about this'
               })
//store.dispatch({type: 'LOG-OUT'})

//FETCHING
store.dispatch({type: 'FETCH_USERS'})
store.dispatch({type: 'FETCH_USERS_ERROR', errorMessage: 'something went wrong'})
store.dispatch({type: 'FETCH_USERS_SUCCESS'})
*/