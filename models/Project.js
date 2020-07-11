const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectname: {
    type: String,
  },
  imageurl: {
    type: String,
  },
  description: {
    type: String,
  },
  deploylink: {
    type: String,
  },
  githublink: {
    type: String,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
