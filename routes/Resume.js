const express = require('express');
const router = express.Router();

const Resume = require('../models/Resume');

router.get('/resume', (req, res) => {
  Resume.find({}).exec((err, doc) => {
    if (err)
      res.status(500).json({
        message: {
          msgBody: 'A Database Error has Occured',
          msgError: true,
        },
      });
    else {
      console.log(doc);
      res.status(200).json({ resumes: doc });
    }
  });
});

module.exports = router;
