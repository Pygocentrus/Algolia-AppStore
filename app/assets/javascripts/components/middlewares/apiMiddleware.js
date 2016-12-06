import * as types from '../constants/actionTypes';
import * as routes from '../constants/routes';
import * as api from '../actions/api';
import { postApiGenerator, deleteApiGenerator } from '../utils/apiWrapper';

const apiMiddleware = store => next => action => {
  const postApi = postApiGenerator(next);
  const deleteApi = deleteApiGenerator(next);

  next(action);

  switch (action.type) {
    case types.CREATE_APP: {
      postApi({
        route: routes.CREATE_APP_R,
        name: types.CREATE_APP,
        params: { ...action.app },
      });
    }
    case types.DELETE_APP: {
      const { id } = action;
      deleteApi({
        route: routes.DELETE_APP_R(id),
        name: types.CREATE_APP,
        params: { id },
      });
    }
    default:
      break;
  }
};

export default apiMiddleware;
