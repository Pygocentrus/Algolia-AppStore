const apiPrefix = (route) => `/api/v1${route}`;

export const HOME = '/';
export const NEW = '/new';
export const CREATE_APP_R = apiPrefix('/apps');
export const DELETE_APP_R = (id) => apiPrefix(`/apps/${id}`);
