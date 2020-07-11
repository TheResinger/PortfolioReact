const express = require('express');
const router = express.Router();

const Project = require('../models/Project');

router.get('/projects', (req, res) => {
  Project.find({})
    .exec((err, doc) => {
      if (err)
        res.status(500).json({
          message: {
            msgBody: 'A Database Error has Occured',
            msgError: true,
          },
        });
      else {
        console.log(doc);
        res.status(200).json({ projects: doc });
      }
    });
});

module.exports = router;
