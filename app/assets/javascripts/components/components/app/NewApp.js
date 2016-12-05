import React, { PropTypes, Component } from 'react';
import { titleR, urlR, numberR } from '../../utils/rules';
import head from '../../utils/head';
import ucFirst from '../../utils/ucFirst';
import keys from '../../utils/keys';

class NewApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name_input: { value: null, isValid: false, type: "text", validation: titleR },
      image_input: { value: null, isValid: false, type: "url", validation: urlR },
      link_input: { value: null, isValid: false, type: "url", validation: urlR },
      rank_input: { value: null, isValid: false, type: "number", validation: numberR },
    };
  }

  handleChange = (e, el) => {
    const value = e.target.value;
    const input = this.state[el];
    const formInputState = value && value.match(input.validation)
      ? { isValid: true, value }
      : { isValid: false };

    const newState = Object.assign(
      {},
      this.state,
      { [`${el}`]: Object.assign({}, input, formInputState) }
    );

    this.setState(newState);
  }

  onSubmitForm = () => {
    const valid = keys(this.state).every(k => this.state[k].isValid)
    if (valid) {
      this.props.createApp(this.state);
    }
  }

  generateInputs = () => {
    return keys(this.state).map(k =>
      <div className={`form-group ${!this.state[k].isValid ? 'has-error' : ''}`} key={k}>
        <label className="control-label" htmlFor={`${k}`}>{`${ucFirst(k)}:`}</label>
        <div className="input-group">
          <input type={`${this.state[k].type}`} className="form-control" onChange={(e) => this.handleChange(e, k)} />
        </div>
      </div>
    );
  }

  render() {
    const inputs = this.generateInputs();
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Add a new app</div>
        <div className="panel-body">
          <div className="NewApp">
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
