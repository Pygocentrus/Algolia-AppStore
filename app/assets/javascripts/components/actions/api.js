import * as actions from '../constants/actionTypes';

export function createApp(app) {
  return {
    type: actions.CREATE_APP,
    app
  };
}

export function deleteApp(id) {
  return {
    type: actions.DELETE_APP,
    id
  };
}
