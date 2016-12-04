import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import * as routes from './constants/routes';
import configureStore from './store/configureStore';
import LayoutContainer from './containers/LayoutContainer';
import DashboardContainer from './containers/DashboardContainer';
import NewAppContainer from './containers/NewAppContainer';

const store = configureStore();

const App = () =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={LayoutContainer}>
        <Route path={routes.HOME} component={DashboardContainer} />
        <Route path={routes.NEW} component={NewAppContainer} />
      </Route>
    </Router>
  </Provider>;

export default App;
