//Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc. 
//we can use build-in middleware in cases where we want to use previously defined html files or javascripts 

const express=require('express');
const app=express();

app.use(express.static('html'));

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));
