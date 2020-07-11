const express = require('express');
const router = express.Router();

const Project = require('../models/Project');

router.post('/mail', (req, res, next) => {
    const { name, email, message } = req.body;
    const content = ``
});

module.exports = router;
