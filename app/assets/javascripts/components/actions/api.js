import * as actions from '../constants/actionTypes';

export function createApp(app) {
  return {
    type: actions.CREATE_APP,
    app
  };
}

export function deleteApp(app) {
  return {
    type: actions.DELETE_APP,
    app
  };
}
