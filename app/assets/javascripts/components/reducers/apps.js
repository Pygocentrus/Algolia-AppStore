import * as types from '../constants/actionTypes';

const initialState = {
  successMessage: null,
  errorMessage: null,
};

const successMessage = 'The app was successfully added!';
const errorMessage = 'Unfortunately, the app could not be added. Try again later!';

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_APP_SUCCESS:
      return Object.assign({}, state, { successMessage, errorMessage: null });
    case types.CREATE_APP_ERROR:
      return Object.assign({}, state, { successMessage: null, errorMessage });
    default:
      return state;
  }
}
