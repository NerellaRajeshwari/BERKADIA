//here im using body-parser as third party middleware
//Parse incoming request bodies in a middleware before your handlers, available under the req.body property


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
