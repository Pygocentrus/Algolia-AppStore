import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import algoliasearch from 'algoliasearch';

import { createApp, deleteApp } from '../actions/api';
import AppsList from '../components/app/AppsList';
import SearchBox from '../components/app/SearchBox';
import { config } from '../utils/algoliaConfig';

class DashboardContainer extends Component {
  constructor() {
    super();
    this.state = { apps: [] };
  }

  componentDidMount() {
    this.client = algoliasearch(config.appId, config.searchOnlyApiKey);
    this.index = this.client.initIndex(config.index);
  }

  handleChange = (e) => {
    const q = e.target.value;

    if (q && q.length) {
      this.index.search(q, (err, content) => {
        if (!err) {
          this.setState({ apps: content.hits });
        }
      });
    } else {
      this.setState({ apps: [] });
    }
  }

  handleClick = (e, id) => {
    e.preventDefault();
    this.props.deleteApp(id);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Hello, a warm welcome from the app store</h1>
          <p>Use the search bellow to discover the best apps in town</p>
          <SearchBox onChange={this.handleChange} />
        </div>
        <AppsList apps={this.state.apps} handleClick={this.handleClick}/>
      </div>
    );
  }
}

DashboardContainer.propTypes = {};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteApp: (id) => dispatch(deleteApp(id)),
});

export default connect(null, mapDispatchToProps)(DashboardContainer);
