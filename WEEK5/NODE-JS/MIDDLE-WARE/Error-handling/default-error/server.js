//xpress comes with a built-in error handler that takes care of any errors that might be encountered in the app
//This default error-handling middleware function is added at the end of the middleware function stack.


const express=require('express');
const app=express();

app.get("/", [
    function (req, res, next) {
      fs.readFile("/valid-file", "utf8", function (err, data) {
          res.locals.data = data;
          next(err);
      });
    },
    //default error handler
    function errorHandler (err, req, res, next) {
        if (res.headersSent) {
          return next(err)
        }
        res.status(500)
        res.render('error', { error: err })
      }
  ]);
  
const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
