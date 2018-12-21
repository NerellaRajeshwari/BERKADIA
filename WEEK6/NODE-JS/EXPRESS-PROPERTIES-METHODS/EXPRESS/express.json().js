

CODE:

//This is a built-in middleware function in Express. 
//It parses incoming requests with JSON payloads and is based on body-parser.

Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. 
const express= require('express');
const app= express();

app.use(express.json());

app.get('/', (req, res)=>{
res.send('hello world!');
});

const port=process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to ${port}....`));


OUTPUT:

PS C:\Users\Rajeshwary\Desktop\nodoc> node index.js
listening to 3000....
