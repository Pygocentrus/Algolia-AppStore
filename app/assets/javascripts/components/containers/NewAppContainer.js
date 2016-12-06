import { connect } from 'react-redux';

import * as apiActions from '../actions/api';
import NewApp from '../components/app/NewApp';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createApp: (data) => dispatch(apiActions.createApp(data)),
});

export default connect(null, mapDispatchToProps)(NewApp);
