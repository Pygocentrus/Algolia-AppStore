import React, { PropTypes } from 'react';

const emphasized = (item, name) => {
  const content = !!item._highlightResult[name].matchedWords.length
    ? item._highlightResult[name].value
    : item[name];
  return { __html: content };
}

const getApps = (apps, onClick) => {
  return apps.map(app =>
    <tr key={app.objectID}>
      <td>{app.id}</td>
      <td dangerouslySetInnerHTML={emphasized(app, 'name')} />
      <td dangerouslySetInnerHTML={emphasized(app, 'category')} />
      <td><a href={app.link} target="_blank">link</a></td>
      <td>
        <button className="btn btn-danger" onClick={(e) => onClick(e, app.id)}>
          <i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete
        </button>
      </td>
    </tr>
  );
}

const AppsList = ({ apps, onClick }) => {
  if (!apps.length) { return null }
  return (
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
        {getApps(apps, onClick)}
      </tbody>
    </table>
  );
};

AppsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  apps: PropTypes.array,
};

export default AppsList;
