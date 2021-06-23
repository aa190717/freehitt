import {GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE} from '../action-types';

const initialState = {
  isLoading: false,
};

export const eventsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_EVENTS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const getEvents = (state: any) => state?.events || null;
