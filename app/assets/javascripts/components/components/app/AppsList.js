import React, { PropTypes } from 'react';

const emphasized = (item, name) => {
  const content = !!item._highlightResult[name].matchedWords.length
    ? item._highlightResult[name].value
    : item[name];
  return { __html: content };
}

const getApps = (apps, handleClick) => {
  return apps.map(app =>
    <tr key={app.objectID}>
      <td>{app.id}</td>
      <td dangerouslySetInnerHTML={emphasized(app, 'name')} />
      <td dangerouslySetInnerHTML={emphasized(app, 'category')} />
      <td><a href={app.link} target="_blank">link</a></td>
      <td>
        <button className="btn btn-danger" onClick={(e) => handleClick(e, app.id)}>
          <i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete
        </button>
      </td>
    </tr>
  );
}

const AppsList = ({ apps, data, handleClick }) => {
  if (!apps.length) { return null }
  return (
    <div>
      <div>
        {`${data.nbHits} result${data.nbHits > 1 ? 's' : ''} found in ${data.ms}ms`}
      </div>
      <br />
      <table className="table table-hover table-stripped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getApps(apps, handleClick)}
        </tbody>
      </table>
    </div>
  );
};

AppsList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  apps: PropTypes.array,
  data: PropTypes.object,
};

export default AppsList;
