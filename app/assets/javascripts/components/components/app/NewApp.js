import React, { PropTypes, Component } from 'react';
import merge from 'lodash/merge';

import { titleR, urlR, numberR } from '../../utils/rules';
import head from '../../utils/head';
import ucFirst from '../../utils/ucFirst';
import keys from '../../utils/keys';

class NewApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashMessage: {
        text: null,
        type: null,
      },
      fields: {
        name: { value: null, isValid: false, type: "text", validation: titleR },
        image: { value: null, isValid: false, type: "url", validation: urlR },
        link: { value: null, isValid: false, type: "url", validation: urlR },
        category: { value: null, isValid: false, type: "text", validation: titleR },
        rank: { value: null, isValid: false, type: "number", validation: numberR },
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successMessage) {
      const state = merge({}, this.state, { flashMessage: { text: nextProps.successMessage, type: 'success' } });
      this.setState(state);
    } else if (nextProps.errorMessage) {
      const state = merge({}, this.state, { flashMessage: { text: nextProps.errorMessage, type: 'danger' } });
      this.setState(state);
    }
  }

  handleChange = (e, el) => {
    const value = e.target.value;
    const input = this.state.fields[el];
    const formInputState = value && value.match(input.validation)
      ? { isValid: true, value }
      : { isValid: false };

    const newState = merge({}, this.state,
      { fields: { [`${el}`]: merge({}, input, formInputState) } }
    );

    this.setState(newState);
  }

  onSubmitForm = () => {
    const inputs = keys(this.state.fields);
    const valid = inputs.every(k => this.state.fields[k].isValid)

    if (valid) {
      const app = inputs.map(k => ({ [`${k}`]: this.state.fields[k].value }));
      this.props.createApp(merge({}, ...app));
    }
  }

  getFlashMessage = () => {
    const { text, type } = this.state.flashMessage;
    if (text && type) {
      return <div className={`alert alert-${type}`}>{text}</div>;
    }
    return null;
  }

  generateInputs = () => {
    return keys(this.state.fields).map(k =>
      <div className={`form-group ${!this.state.fields[k].isValid ? 'has-error' : ''}`} key={k}>
        <label className="control-label" htmlFor={`${k}`}>{`${ucFirst(k)}:`}</label>
        <input type={`${this.state.fields[k].type}`} className="form-control" onChange={(e) => this.handleChange(e, k)} />
      </div>
    );
  }

  render() {
    const inputs = this.generateInputs();
    const flashMessage = this.getFlashMessage();
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Add a new app</div>
        <div className="panel-body">
          <div className="NewApp">
            {flashMessage}
            {inputs}
            <br />
            <button className="btn btn-info btn-lg" onClick={this.onSubmitForm}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

NewApp.propTypes = {
  createApp: PropTypes.func.isRequired,
};

export default NewApp;
