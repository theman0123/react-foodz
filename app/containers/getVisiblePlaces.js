import { connect } from 'react-redux';
import PlaceCards from '../components/places/PlaceCards.js';
import { newPlace, fetchPlaces } from '../actions/places.js';

const getVisiblePlaces = (places, filter) => {
  switch (filter) {
    case 'NEAR_ME':
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;

          return dispatch(fetchPlaces(lat, lon))
        })
      }; 
      return (
        <h1>'no geolocation'</h1>
      );
    case 'VISITED':
      return places.filter(p => p.visited)
    default:
      return places;
  }
};

const mapStateToProps = state => {
  return {
    places: getVisiblePlaces(state.places, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlaceClick: (id, placeName, address, likes, stars, photo, categories) => {
      dispatch(newPlace(id, placeName, address, likes, stars, photo, categories))
    }
  };
};

const VisiblePlaces = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceCards);

export default VisiblePlaces;
