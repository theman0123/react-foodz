import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/places/Link.js';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterPlaces = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterPlaces;
