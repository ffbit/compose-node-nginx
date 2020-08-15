'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res) => {
  console.log(`About to send response to ${port}.`);
  res.send(`Hello from node. It's ${Date.now()}\n`);
});

const server = app.listen(port,  () => {
  console.log(`Listening on port: ${port}`);
});

const handProcessTermination = (signal) => {
  console.info(`Service is being shut down by signal: ${signal}`);
  server.close();
  process.exit();
};
process.on('SIGTERM', handProcessTermination);
process.on('SIGINT', handProcessTermination);
