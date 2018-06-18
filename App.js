import React from 'react';
import MovieList from './components/MovieList';
import movieDbHelper from './helpers/movieDbHelper';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab: 'nowPlaying',
      movieData: { nowPlaying: [], upcoming: [] },
    };
  }

  componentWillMount() {
    movieDbHelper
      .getNowPlaying()
      .then(response => {
        const nowPlaying = movieDbHelper
          .parseApiResponse(response)
          .sort((a, b) => b.popularity - a.popularity);
        const movieData = this.state.movieData;
        movieData.nowPlaying = nowPlaying;
        this.setState({
          movieData: movieData,
        });
      })
      .catch(err => {
        throw err;
      });
    movieDbHelper
      .getUpcoming()
      .then(response => {
        const upcoming = movieDbHelper
          .parseApiResponse(response)
          .sort(
            (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)
          );
        const movieData = this.state.movieData;
        movieData.upcoming = upcoming;
        this.setState({
          movieData: movieData,
        });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    const { currentTab, movieData } = this.state;
    return (
      <View style={styles.container}>
        <MovieList movies={movieData[currentTab]} />
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
