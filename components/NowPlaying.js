import React from 'react';
import MovieList from './MovieList';

const NowPlaying = ({ screenProps }) => (
  <MovieList
    movies={screenProps.state.nowPlaying.sort(
      (a, b) => b.popularity - a.popularity
    )}
  />
);

export default NowPlaying;
