import update from 'immutability-helper';

const places = (state={
  byId: {},
  allPlaces: []
}, action) => {
  switch(action.type) {
    case 'NEW_PLACE': {
      console.log('newplace')
      return update(state, {
        byId: {
          [action.id]: {
            $set: {
              id: action.id,
              placeName: action.placeName,
              address: action.address,
              likes: action.likes,
              stars: action.stars,
              photo: action.photo,
              categories: action.categories}}},
        allPlaces: {$push: [action.id]}
        });
    }
    case 'EDIT_PLACE': {
      let findPlace;
      if (!Array.prototype.includes) {
        findPlace = state.allPlace.filter(placeId => placeId === action.id);
      }
      if (state.allPlaces.includes(action.id) || findPlace) {
        return update(state, {
          byId: {
            [action.id]: {
              $set: {
                id: action.id,
                placeName: action.placeName,
                address: action.address,
                likes: action.likes,
                stars: action.stars,
                photo: action.photo,
                categories: action.categories}}}});
      }
      return state;
      }
      case 'DELETE_PLACE': {
        return update(state, {
          byId: {
            [action.id]: { $set: null }},
          allPlaces: {
            $apply: allPlaces => allPlaces.filter(placeId => placeId !== action.id)
          }
        });
      }
    default: return state; 
  }
};

export default places;
