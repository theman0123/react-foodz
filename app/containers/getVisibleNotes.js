import { connect } from 'react-redux'
import PlaceCards from '../components/places/PlaceCards.js';

const getVisiblePlaces = (places, filter) => {
  switch (filter) {
    case 'NEAR_ME':
      return places;
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
    onPlaceClick: id => {
      dispatch(newPlace(id))
    }
  };
};

const VisiblePlaces = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceCards);

export default VisiblePlaces;
