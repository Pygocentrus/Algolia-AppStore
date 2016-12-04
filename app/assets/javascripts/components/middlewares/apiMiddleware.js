import * as emersyaTypes from '../constants/actionTypes';
import * as api from '../actions/api';

const apiMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    default:
      break;
  }
};

export default apiMiddleware;
