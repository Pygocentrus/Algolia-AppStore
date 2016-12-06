import React, { PropTypes } from 'react';

const SearchBox = ({ onChange }) =>
  <div className="input-group">
    <div className="input-group-addon">
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
    <input
      className="form-control"
      type="text"
      placeholder="Search here..."
      onChange={onChange}
    />
  </div>;

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
