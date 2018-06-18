import React from 'react';
import { StyleSheet, Text } from 'react-native';

const MovieListItem = ({ movieDetails }) => (
  <Text>
    {movieDetails.title} {movieDetails.popularity}
  </Text>
);

const styles = StyleSheet.create({
  movieListItem: {},
});

export default MovieListItem;
