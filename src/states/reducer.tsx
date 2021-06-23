import {combineReducers} from 'redux';
import {authReducer} from './auth/auth.reducer';
import {eventsReducer} from './events/event.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  event: eventsReducer,
});
