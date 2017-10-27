import React from 'react';
import FilterPlaces from '../../containers/FilterPlaces.js';

const Filter = () => (
  <p>
    Show:
    {' '}
    <FilterPlaces filter="NEAR_ME">
      Near Me
    </FilterPlaces>
    {', '}
    <FilterPlaces filter="VISITED">
      Visited
    </FilterPlaces>
  </p>
);

export default Filter;
