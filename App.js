import React from 'react';
import MovieList from './components/MovieList';
import movieDbHelper from './helpers/movieDbHelper';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentWillMount() {
    movieDbHelper
      .getNowPlaying()
      .then(response => {
        const movies = response.data.results
          .map(movie => ({
            key: String(movie.id),
            title: movie.title,
            popularity: movie.popularity,
            genres: movie.genre_ids,
            poster_path: movie.poster_path,
          }))
          .sort((a, b) => b.popularity - a.popularity);
        this.setState({
          movies: movies,
        });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <View style={styles.container}>
        <MovieList movies={movies} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: '10%',
  },
});
