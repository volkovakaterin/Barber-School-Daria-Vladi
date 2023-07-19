import { TAKE_COURSES, CHANGE_COURSE, TAKE_SCHEDULE, SHOW_FORM, HIDE_FORM, SHOW_FORM_REGISTRATION, SEND_REGISTRATION_FAILURE, SEND_REGISTRATION_SUCCESS } from "./actions";

export const takeCourses = () => ({
  type: TAKE_COURSES,
});

export const changeCourse = (chosenCourse, e) => ({
  type: CHANGE_COURSE,
  payload: {
    chosenCourse
  }
});

export const takeSchedule = () => ({
  type: TAKE_SCHEDULE,
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
  try {
    const response = await fetch('//dariavlady.ru:8000/send_registration_form', {
      //https://dariavlady.ru:8000/send_registration_form
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
