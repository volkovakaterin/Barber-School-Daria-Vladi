import { TAKE_COURSES, CHANGE_COURSE, SHOW_FORM, HIDE_FORM, SHOW_FORM_REGISTRATION, SEND_REGISTRATION_FAILURE, SEND_REGISTRATION_SUCCESS, OPEN_CREDIT_FAILURE, OPEN_CREDIT_SUCCESS } from "./actions";

export const takeCourses = () => ({
  type: TAKE_COURSES,
});

export const changeCourse = (chosenCourse, e) => ({
  type: CHANGE_COURSE,
  payload: {
    chosenCourse
  }
});

export const showForm = () => ({
  type: SHOW_FORM,
});

export const hideForm = () => ({
  type: HIDE_FORM,
})

export const showFormRegistration = (course) => ({
  type: SHOW_FORM_REGISTRATION,
  payload: {
    course
  }
})

export const sendRegistrationFailure = error => ({
  type: SEND_REGISTRATION_FAILURE,
  payload: {
    error,
  },
});

export const sendRegistrationSuccess = () => ({
  type: SEND_REGISTRATION_SUCCESS,
});

export const sendRegistrationForm = async (dispatch, message) => {
  console.log('sendRegistrationForm')
  try {
    const response = await fetch('//dariavlady.ru:8000/send_registration_form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({message}),
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(sendRegistrationSuccess());
  } catch (e) {
    dispatch(sendRegistrationFailure(e.message));
  }
}

export const openCreditFormFailure = error => ({
  type: OPEN_CREDIT_FAILURE,
  payload: {
    error,
  },
});

export const openCreditFormSuccess = () => ({
  type: OPEN_CREDIT_SUCCESS,
});

export const openCreditForm = async (dispatch, title, status) => {
  try {
    const response = await fetch('//dariavlady.ru:8000/open_credit_form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name: title, status: status}),
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(openCreditFormSuccess());
  } catch (e) {
    dispatch(openCreditFormFailure(e.message));
  }
}