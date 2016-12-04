import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from '../middlewares/apiMiddleware';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  apiMiddleware
)(createStore);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, devTools, initialState);
}
