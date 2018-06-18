import React from 'react';
import StackNavigator from './components/StackNavigator';
import movieDbHelper from './helpers/movieDbHelper';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nowPlaying: [],
      upcoming: [],
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
        this.setState({ nowPlaying });
      })
      .catch(err => {
        throw err;
      });
    movieDbHelper
      .getUpcoming()
      .then(response => {
        const upcoming = movieDbHelper.parseApiResponse(response);
        this.setState({ upcoming });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    return <StackNavigator screenProps={{ state: this.state }} />;
  }
}
