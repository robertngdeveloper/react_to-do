'use strict';
const express     = require('express');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
// This tests to see if we have NODE_ENV in our environment.
// Only load the dotenv if we need it.
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;
const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;
// Let's go!
app.listen(PORT, () => console.log('Server is listening on', PORT));
// set up some logging
app.use(logger(isDev ? 'dev' : 'common'));
//we're only going to accept json
app.use(bodyParser.json());
// generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});
