import React, { PropTypes } from 'react';

const SearchBox = ({ onChange }) =>
  <div>
    <input type="text" onChange={onChange} placeholder="Search here..." />
  </div>;

SearchBox.propTypes = {};

export default SearchBox;
