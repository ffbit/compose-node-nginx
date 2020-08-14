'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res) => {
  console.log(`About to send response to ${port}.`);
  res.send(`Hello from node. It's ${Date.now()}\n`);
});

app.listen(port,  () => {
  console.log(`Listening on port: ${port}`);
});
