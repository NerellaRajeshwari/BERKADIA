CODE:

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
