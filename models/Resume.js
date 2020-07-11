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
  current: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Resume', ResumeSchema);
