import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as routes from '../../constants/routes';

const isActiveClass = (context, linkRoute) =>
  (context.router.location.pathname === linkRoute ? 'active' : '');

const Header = (props, context) =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <span className="navbar-brand">
          <i className="fa fa-apple" aria-hidden="true"></i>
        </span>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className={`${isActiveClass(context, routes.HOME)}`}>
            <Link to={routes.HOME}>Dashboard</Link>
          </li>
          <li className={`${isActiveClass(context, routes.NEW)}`}>
            <Link to={routes.NEW}>New App</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>;

Header.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default Header;
