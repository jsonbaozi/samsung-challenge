import React from 'react';
import TabNavigator from './components/TabNavigator';
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
    return <TabNavigator screenProps={{ state: this.state }} />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     marginTop: StatusBar.currentHeight,
//   },
// });
