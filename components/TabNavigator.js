import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

const styles = {
  tabNavigator: {
    marginTop: StatusBar.currentHeight,
  },
};

export default createMaterialTopTabNavigator(
  {
    'Now Playing': { screen: NowPlaying },
    Upcoming: { screen: Upcoming },
  },
  {
    initialRouteName: 'Now Playing',
    tabBarOptions: {
      style: styles.tabNavigator,
    },
  }
);
