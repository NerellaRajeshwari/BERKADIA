//implementing express.static() on a html folder

const express = require('express');  
const app = express();

app.use('/', express.static('html'));

module.exports = app;
