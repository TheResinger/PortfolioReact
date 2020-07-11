export default {
  sendMail: () => {
    return fetch('/mail', {
      method: 'post',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      if (res.status !== 401) return res.json().then(data => data);
      else
        res
          .status(500)
          .json({
            message: {
              msgBody: 'A issue occured sending mail',
              msgError: true,
            },
          });
    });
  },
};
