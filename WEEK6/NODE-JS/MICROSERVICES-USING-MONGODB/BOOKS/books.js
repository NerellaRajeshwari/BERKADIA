const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose =require("mongoose");

require("./Book")
const Book=mongoose.model("Book");

mongoose.connect("mongodb://chellam:chellam22@ds161134.mlab.com:61134/booksservice",()=>{
    console.log("database");   
});

app.get('/',(req,res)=>{
    res.send("another");
});



//create func
app.post("/book",(req,res)=>{
    var newBook ={
        title:req.body.title,
        author:req.body.author,
        numberPages:req.body.numberPages,
        publisher:req.body.publisher
    }
    //creating anew book with attributes
    var book = new Book(newBook);
 book.save().then(()=>{
     console.log("new boook created");
 }).catch((err)=>{
     if(err){
         throw err;
     }
 })
 res.send("a new book created ");
});


app.get("/books",(req,res)=>{
Book.find().then((books)=>{
   res.json(books)
}).catch(err=>{
    if(err){
        throw err;
    }
});
});
app.get("/book/:id",(req,res)=>{
Book.findById(req.params.id).then((book)=>{
    if(book){
        res.json(book)
    }else{
        res.sendStatus(404);
    }
}).catch(err=>{
    if(err){
        throw err;
    }
});
});

app.delete("/book/:id",(req,res)=>{
    Book.findOneAndRemove(req.params.id).then(()=>
    {
        res.send("book successfully removed")
    }).catch(err=>{
        if(err){
            throw err;
        }
    })
})
app.listen(3002,()=>{
    console.log("its running");
});
