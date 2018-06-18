import React from 'react';
import MovieListItem from './MovieListItem';
import { StyleSheet, FlatList } from 'react-native';

const MovieList = ({ movies, navigation }) => (
  <FlatList
    style={styles.movieList}
    data={movies}
    renderItem={({ item }) => (
      <MovieListItem movieDetails={item} navigation={navigation} />
    )}
  />
);

const styles = StyleSheet.create({
  movieList: {},
});

export default MovieList;
