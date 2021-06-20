import {AUTH_LOADING} from './auth.action';

const initialState = {};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_LOADING: {
      return {
        ...state,
        isLoading: true,
        // error: false,
      };
    }
    default:
      return state;
  }
};
