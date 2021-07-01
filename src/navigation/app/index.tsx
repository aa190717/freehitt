import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens';
import { SelectorScreen } from '../../screens/events/live/selector';
import { ConfirmSelection } from '../../screens/events/live/confirm-selection';
import { Wildcard } from '../../screens/events/live/wildcard-selection';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Freehitt" component={HomeScreen} />
        <Stack.Screen name="Selector" component={SelectorScreen} />
        <Stack.Screen name="Confirm" component={ConfirmSelection} />
        <Stack.Screen name="Wildcard" component={Wildcard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
