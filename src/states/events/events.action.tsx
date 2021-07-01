import { getLiveEvents } from '../../api/events.api';
import { GET_EVENTS_SUCCESS } from '../action-types';

export const getEventsActions = () => {
  return async (dispatch: any) => {
    const events = await getLiveEvents();
    if (events) {
      dispatch({
        type: GET_EVENTS_SUCCESS,
        payload: {
          events
        }
      });
    }
  };
};
