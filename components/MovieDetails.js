import React from 'react';
import { getGenreMap } from '../helpers/movieDbHelper';
import { DB_IMG_URL } from '../helpers/config';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

export default class MovieDetails extends React.Component {
  render() {
    const { navigation } = this.props;
    const movieDetails = navigation.getParam('movieDetails', {});
    const genreMap = getGenreMap();
    return (
      <View style={styles.movieDetails}>
        <Image
          style={styles.moviePosterLarge}
          source={{
            uri: `${DB_IMG_URL}/original${movieDetails.poster_path}`,
          }}
        />
        <View style={styles.titleBar}>
          <Text style={styles.titleBarHeader}>{movieDetails.title} </Text>
          <View style={styles.titleBarFooter}>
            <Text>Rating: {movieDetails.vote_avg}/10</Text>
            {genreMap !== false && (
              <Text>
                {' '}
                {movieDetails.genres
                  .map(genreId => genreMap[genreId])
                  .reduce((acc, genre) => `${acc}, ${genre}`)}
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieDetails: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#E0E0E0',
  },
  moviePosterLarge: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width * 1.5,
  },
  titleBar: {
    flex: 1,
    margin: 10,
  },
  titleBarHeader: {
    fontSize: 20,
  },
  titleBarFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
