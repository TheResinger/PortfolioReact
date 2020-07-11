const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Change connection string to PROCESS.ENV.
const dbConnectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`MongoDB Connected at ${dbConnectionString}`))
  .catch(err => console.log(err));

const router = require('./routes/Projects');
app.use('/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// const Project = require('./models/Project');
// const projectInput = {
//   projectname: 'Skybeat',
//   imageurl: 'https://i.imgur.com/od58AEl.png',
//   description: 'Stuff and thing',
//   deploylink: 'https://skybeat.herokuapp.com',
//   githublink: 'https://github.com/TheResinger/SkyBeat',
// };
// const project = new Project(projectInput);
// project.save((err, doc) => {
//   if (err) console.log(err);
//   console.log(doc);
// });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
