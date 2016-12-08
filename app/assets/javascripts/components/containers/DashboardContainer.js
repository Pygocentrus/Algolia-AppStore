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
    this.state = { apps: [], data: {} };
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
          this.setState({
            apps: content.hits,
            data: {
              nbHits: content.nbHits,
              ms: content.processingTimeMS,
            },
          });
        }
      });
    } else {
      this.setState({ apps: [], data: {} });
    }
  }

  handleClick = (e, id) => {
    e.preventDefault();
    const s = this.state;

    this.props.deleteApp(id);
    this.setState({
      apps: s.apps.filter(h => h.id !== id),
      data: {
        nbHits: s.data.nbHits - 1,
        ms: s.data.ms,
      },
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Hello, a warm welcome from the app store</h1>
          <p>Use the search bellow to discover the best apps in town</p>
          <SearchBox onChange={this.handleChange} />
        </div>
        <AppsList apps={this.state.apps} data={this.state.data} handleClick={this.handleClick}/>
      </div>
    );
  }
}

DashboardContainer.propTypes = {};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteApp: (id) => dispatch(deleteApp(id)),
});

export default connect(null, mapDispatchToProps)(DashboardContainer);
