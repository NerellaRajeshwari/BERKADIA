code:

//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
//This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings


const express = require('express')
const app = express();
const bodyParser = require('body-parser');

// it will support json encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/users', function(req, res) {
  res.send("Hi "+req.body.firstname + ' ' + req.body.lastname +' ' + "welcome to berkadia");
});

// creating a dynamic port to have a secure connecction 
const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));


output:

hi rajee chellam welcome to berkadia
