import React from 'react';
import MovieList from './MovieList';

const Upcoming = ({ screenProps, navigation }) => (
  <MovieList
    movies={screenProps.state.upcoming.sort(
      (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
    )}
    navigation={navigation}
  />
);

export default Upcoming;
