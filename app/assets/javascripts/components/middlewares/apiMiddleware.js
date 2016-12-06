import * as types from '../constants/actionTypes';
import * as routes from '../constants/routes';
import * as api from '../actions/api';
import { postApiGenerator, deleteApiGenerator } from '../utils/apiWrapper';

const apiMiddleware = store => next => action => {
  next(action);

  const postApi = postApiGenerator(next);
  const deleteApi = deleteApiGenerator(next);

  switch (action.type) {
    case types.CREATE_APP: {
      postApi({
        route: routes.CREATE_APP_R,
        name: types.CREATE_APP,
        params: { ...action.app },
      });
      break;
    }
    case types.DELETE_APP: {
      const { id } = action;
      deleteApi({
        route: routes.DELETE_APP_R(id),
        name: types.DELETE_APP,
        params: { id },
      });
      break;
    }
    default:
      break;
  }
};

export default apiMiddleware;
