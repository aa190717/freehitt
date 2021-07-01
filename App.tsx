import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { AppNavigator } from './src/navigation/app';
import store from './src/states/store';

const App = () => {
  useEffect(() => SplashScreen.hide());
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
