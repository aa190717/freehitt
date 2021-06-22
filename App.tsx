import React, {useEffect} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import SplashScreen from 'react-native-splash-screen';
import {authReducer} from './src/states/reducer';
import {AppNavigator} from './src/navigation/app';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const App = () => {
  useEffect(() => SplashScreen.hide());
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
