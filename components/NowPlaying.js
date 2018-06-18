import React from 'react';
import MovieList from './MovieList';

const NowPlaying = ({ screenProps, navigation }) => (
  <MovieList
    movies={screenProps.state.nowPlaying.sort(
      (a, b) => b.popularity - a.popularity
    )}
    navigation={navigation}
  />
);

export default NowPlaying;
