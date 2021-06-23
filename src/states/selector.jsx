import {eventsReducer, getEvents} from './events/event.reducer';

export const getEventsSel = state => getEvents(state);
