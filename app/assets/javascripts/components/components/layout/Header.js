import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as routes from '../../constants/routes';

const Header = () =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <span className="navbar-brand">
          <Link to={routes.HOME}>AppStore</Link>
        </span>
        <span className="navbar-brand">
          <Link to={routes.NEW}>New App</Link>
        </span>
      </div>
    </div>
  </nav>;

export default Header;
