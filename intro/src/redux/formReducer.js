import { SHOW_FORM, HIDE_FORM, SHOW_FORM_REGISTRATION, SEND_REGISTRATION_FAILURE, SEND_REGISTRATION_SUCCESS } from './actions';

const initialState = {
  showForm: false,
  course: '',
  error: null,
  successSending: false
}

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        showForm: true
      };
    case HIDE_FORM:
      return {
        showForm: false,
        course: '',
        error: null,
        successSending: false
      };
    case SHOW_FORM_REGISTRATION:
      const { course } = action.payload;
      return {
        ...state,
        showForm: true,
        course
      };
    case SEND_REGISTRATION_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    case SEND_REGISTRATION_SUCCESS:
      return {
        ...state,
        successSending: true
      }
    default:
      return state;
  }
}