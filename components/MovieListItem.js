import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const MovieListItem = ({ movieDetails }) => (
  <View style={styles.movieListItem}>
    <Image
      style={styles.moviePoster}
      source={{
        uri: `http://image.tmdb.org/t/p/w92${movieDetails.poster_path}`,
      }}
    />
    <View style={styles.movieDetails}>
      <Text>{movieDetails.title}</Text>
      <Text>{movieDetails.popularity}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  movieListItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moviePoster: {
    width: 92,
    height: 138,
  },
  movieDetails: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MovieListItem;
