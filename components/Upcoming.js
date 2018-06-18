import React from 'react';
import MovieList from './MovieList';

const Upcoming = ({ screenProps }) => (
  <MovieList
    movies={screenProps.state.upcoming.sort(
      (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
    )}
  />
);

export default Upcoming;
