import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableNativeFeedback,
} from 'react-native';

const MovieListItem = ({ movieDetails, navigation }) => (
  <TouchableNativeFeedback
    onPress={() =>
      navigation.navigate('Details', { movieDetails: movieDetails })
    }
  >
    <View style={styles.movieListItem}>
      <Image
        style={styles.moviePoster}
        source={{
          uri: `http://image.tmdb.org/t/p/w92${movieDetails.poster_path}`,
        }}
      />
      <View style={styles.movieDetails}>
        <Text style={styles.movieTitle}>{movieDetails.title}</Text>
        <Text>Rating: {movieDetails.vote_avg}/10 </Text>
        <Text>Popularity: {Math.round(movieDetails.popularity)}</Text>
      </View>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
  movieListItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    backgroundColor: '#E0E0E0',
    borderWidth: 0.2,
    borderColor: '#212121',
  },
  moviePoster: {
    width: 92,
    height: 138,
  },
  movieDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '5%',
  },
  movieTitle: {
    fontSize: 17,
  },
});

export default MovieListItem;
