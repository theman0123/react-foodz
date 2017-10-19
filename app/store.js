import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers/index.js';

const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducer, middleware);

//store.dispatch({type: 'NEW_PLACE',
//                id: '123',
//                placeName: 'Chilis',
//                address: '234 n. 234 s., slc, ut, 84111',
//                likes: 4,
//                stars: 3,
//                photo: 'somephoto',
//                categories: ['tacos', 'local', 'foodmania']
//               })
//store.dispatch({type: 'EDIT_PLACE',
//                id: '123',
//                placeName: 'Wallabys',
//                address: '543 n. 234 s., slc, ut, 23849',
//                likes: '4',
//                stars: '3',
//                photo: 'edited',
//                categories: ['tacos', 'local', 'edited']
//               })
//store.dispatch({type: 'NEW_NOTE',
//                id: '123',
//                placeId: '543',
//                ownerId: '999',//=userId
//                title: 'boring',
//                foodDetails: 'static',
//                show: false,
//                likes: '4',
//                stars: '3',
//                photo: 'original',
//                tags: ['burritos', 'local', 'edited']
//               })
//
//store.dispatch({type: 'EDIT_NOTE',
//                id: '123',
//                placeId: '543',
//                ownerId: '999',
//                userId: '999',
//                title: 'different',
//                foodDetails: 'changed',
//                show: true,
//                likes: '4',
//                stars: '3',
//                photo: 'edited',
//                tags: ['tacos', 'local', 'edited']
//               })
//store.dispatch({type: 'DELETE_NOTE', id: '123', userId: '999'})
//store.dispatch({type: 'DELETE_PLACE', id: '123'})
store.dispatch({type: 'LOG-IN'})

export default store;