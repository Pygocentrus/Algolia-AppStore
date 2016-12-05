import { connect } from 'react-redux';

import { createApp } from '../actions/api';
import NewApp from '../components/app/NewApp';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createApp: (data) => dispatch(createApp(data)),
});

export default connect(null, mapDispatchToProps)(NewApp);
