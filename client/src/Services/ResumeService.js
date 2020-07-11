export default {
  getOldResumes: () => {
    return fetch('/resumes/old').then(response => {
      if (response.status !== 401) {
        return response.json().then(data => data);
      } else {
        return { message: { msgBody: 'Unauthorized' }, msgError: true };
      }
    });
  },
  getCurrentResume: () => {
    return fetch('/resumes/current').then(response => {
      if (response.status !== 401) {
        return response.json().then(data => data);
      } else {
        return { message: { msgBody: 'Unauthorized' }, msgError: true };
      }
    });
  },
};
