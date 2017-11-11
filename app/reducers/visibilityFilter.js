import { fetchPlaces } from '../actions/places.js';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return dispatch(fetchPlaces());
    default:
      return state
  }
};

export default visibilityFilter;
