import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';

const MovieList = ({ movies }) => (
  <FlatList
    style={styles.movieList}
    data={movies}
    renderItem={({ item }) => (
      <Text>
        {item.title} {item.popularity}
      </Text>
    )}
  />
);

const styles = StyleSheet.create({
  movieList: {},
});

export default MovieList;
