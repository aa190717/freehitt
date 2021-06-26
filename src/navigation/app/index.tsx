import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens';
import {SelectorScreen} from '../../screens/events/live/selector';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Fillkart" component={HomeScreen} />
        <Stack.Screen name="Selector" component={SelectorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
