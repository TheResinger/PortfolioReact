export default {
  getResumes: () => {
    return fetch('/resumes').then(response => {
      if (response.status !== 401) {
        return response.json().then(data => data);
      } else {
        return { message: { msgBody: 'Unauthorized' }, msgError: true };
      }
    });
  },
};
