import React from 'react';
// import NowPlaying from './components/NowPlaying';
// import Upcoming from './components/Upcoming';
import TabNavigator from './components/TabNavigator';
import movieDbHelper from './helpers/movieDbHelper';
// import { createMaterialTopNavigator } from 'react-navigation';
import { StyleSheet, StatusBar, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab: 'nowPlaying',
      movieData: { nowPlaying: [], upcoming: [] },
    };
  }

  componentWillMount() {
    this.fetchFromApi();
  }

  fetchFromApi() {
    movieDbHelper
      .getNowPlaying()
      .then(response => {
        const nowPlaying = movieDbHelper.parseApiResponse(response);
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
        const upcoming = movieDbHelper.parseApiResponse(response);
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
    return <TabNavigator screenProps={{ movieData }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: StatusBar.currentHeight,
  },
});
