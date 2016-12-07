import { connect } from 'react-redux';

import * as apiActions from '../actions/api';
import NewApp from '../components/app/NewApp';

const mapStateToProps = (state) => {
  const { apps } = state;
  const { successMessage, errorMessage } = apps;
  return { successMessage, errorMessage };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createApp: (data) => dispatch(apiActions.createApp(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewApp);
