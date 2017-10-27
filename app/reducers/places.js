import update from 'immutability-helper';
import fetch from 'isomorphic-fetch';
import visibilityFilter from './visibilityFilter.js';

const places = (state={
  byId: {},
  allPlaces: [],
  visibilityFilter
}, action) => {
  switch(action.type) {
    case 'FETCH_PLACE': {
      return [...state];
    }
    case 'NEW_PLACE': {
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

//checkout: code from redux complex state example. then, normalizr and entities... make sure state shape is appropriate, fetch while incorporating the below code:

//    this.pullRestaurants = function () {
//        
//        if ("geolocation" in navigator) {
//
//            navigator.geolocation.getCurrentPosition(function(position) {
//                var lat = position.coords.latitude;
//                var lon = position.coords.longitude;
//            
//                getFoodz(lat, lon);
//            })
//        } else {
//          console.log('no geolocation');
//        }
//    }
//    var getFoodz = function(lat, lon) {
//        
//        if(lat && lon) {    
//            return $http.get(('https://developers.zomato.com/api/v2.1/search?' + 'lat=' + lat +'&lon=' + lon), {
//                headers: {"X-Zomato-API-Key": "451e00ec0a1c87145925d326a5319666"}
//            }).then(function(response){
//                var data = response.data.restaurants;
//   
//                data.forEach(function(item) {
//                    var path = item.restaurant.location.address;
//
//                    var Restaurant = {
//                        name: item.restaurant.name,
//                        address: path,
//                        slimAddress: path.substring(0, path.length - 10) + "...",
//                        rating: Math.floor(item.restaurant.user_rating.aggregate_rating),
//                        id: item.restaurant.id,
//                        cuisine_type: item.restaurant.cuisines,
//                        menu_url: item.restaurant.menu_url
//                    }
//                    nearArray.push(Restaurant);
//                })
//            })   
//        }
//    }

export default places;
