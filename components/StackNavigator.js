import TabNavigator from './TabNavigator';
import MovieDetails from './MovieDetails';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator(
  {
    Home: { screen: TabNavigator },
    Details: { screen: MovieDetails },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);
