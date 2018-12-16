//implementing express.static() on a html folder
//by default it displays the index.html file output
//we can specify the path /app.html for that particular output
const express = require('express');  
const app = express();

app.use('/', express.static('html'));

module.exports = app;
