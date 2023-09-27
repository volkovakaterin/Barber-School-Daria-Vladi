import { OPEN_CREDIT_FAILURE, OPEN_CREDIT_SUCCESS } from './actions';

const initialState = {
  error: null,
  successOpen: false
}

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CREDIT_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    case OPEN_CREDIT_SUCCESS:
      return {
        ...state,
        successOpen: true
      }
    default:
      return state;
  }
}