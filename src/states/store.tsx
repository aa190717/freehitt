import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
