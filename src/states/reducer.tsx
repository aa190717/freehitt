import { combineReducers } from 'redux';
import { eventsReducer } from './events/event.reducer';

export const rootReducer = combineReducers({
  event: eventsReducer
});
