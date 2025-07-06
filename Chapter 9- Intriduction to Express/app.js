//External Module
const express = require('express');
//local Module
const requestHandler = require('./user');

const app = express();

app.use((req, res, next) => {
  console.log("came in first middleware",req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("came in second middleware",req.url, req.method);
  res.send('<h1>Hello from Tushar.express.com!</h1>');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});