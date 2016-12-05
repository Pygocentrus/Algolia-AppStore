import request from 'superagent';
import keys from './keys';

const defaultHeaders = {};

const responseHandler = (next, name, optionalObject) => (err, res) => {
  if (err) {
    return next({
      type: `${name}_ERROR`,
      optionalObject,
      err,
    });
  }

  const data = res.text && res.type && res.type === 'application/json'
    ? JSON.parse(res.text)
    : {};

  next({
    type: `${name}_SUCCESS`,
    optionalObject,
    data,
  });
};

const sendRequest = (req, name, next, params, headers, optionalObject) => {
  // Set headers
  const allHeaders = Object.assign({}, defaultHeaders, headers);
  keys(allHeaders).forEach(h => req.set(h, allHeaders[h]));

  if (params) {
    req.send(params);
  }
  req.end(responseHandler(next, name, optionalObject));
};

export const postApiGenerator = next => ({ route, name, params, headers = {}, optionalObject = {} }) => {
  const req = request.post(route);
  sendRequest(req, name, next, params, headers, optionalObject);
};

export const deleteApiGenerator = next => ({ route, name, params = {}, headers = {}, optionalObject = {} }) => {
  const req = request.delete(route);
  sendRequest(req, name, next, params, headers, optionalObject);
};
