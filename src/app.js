// This is a placeholder for the Express app setup
const express = require('express');
const app = express();

app.get('/api/status', (req, res) => {
  res.status(200).send('OK');
});

module.exports = app;
