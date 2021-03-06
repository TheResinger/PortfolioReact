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

const projectRouter = require('./routes/Projects');
app.use('/', projectRouter);

const resumesRouter = require('./routes/Resume');
app.use('/resumes', resumesRouter);

const mailRouter = require('./routes/Mail');
app.use('/mail', mailRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
