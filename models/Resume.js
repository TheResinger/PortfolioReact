const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  company: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  dates: {
    type: String,
  },
});

module.exports = mongoose.model('Resume', ResumeSchema);
