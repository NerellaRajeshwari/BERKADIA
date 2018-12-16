//refers to how Express catches and processes errors that occur both synchronously and asynchronously.
//It’s important to ensure that Express catches all errors that occur while running route handlers and middleware.

const express=require('express');
const app=express();


app.get("/", function (req, res, next) {
    fs.readFile("/file", function (err, data) {
      if (err) {
        next(err); // Pass errors to Express.
      }
      else {
        res.send(data);
      }
    });
  });

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
