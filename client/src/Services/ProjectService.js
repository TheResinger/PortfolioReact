export default {
  getProjects: () => {
    return fetch('/projects').then(response => {
      if (response.status !== 401) {
        return response.json().then(data => data);
      } else {
        return { message: { msgBody: 'Unauthorized' }, msgError: true };
      }
    });
  },
};
