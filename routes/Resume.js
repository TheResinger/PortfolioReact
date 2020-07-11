const express = require('express');
const router = express.Router();

const Resume = require('../models/Resume');

router.get('/current', (req, res) => {
  Resume.find({ current: true }).exec((err, doc) => {
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

router.get('/old', (req, res) => {
  Resume.find({ current: false }).exec((err, doc) => {
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
