import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Header from '../../components/header/header';
import {Live, OnGoing, Recent, Result} from '../../screens/events';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Recent: {
      screen: Recent,
    },
    Live: {
      screen: Live,
    },
    OnGoing: {
      screen: OnGoing,
    },
    Result: {
      screen: Result,
    },
  },
  {
    tabBarComponent: Header,
    tabBarOptions: {
      activeTintColor: '#1BA1F3',
      inactiveTintColor: '#000',
    },
    initialRouteName: 'Live',
  },
);

const Events = createAppContainer(TabNavigator);

export default Events;
