const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose =require("mongoose");

require("./Order")
const Order=mongoose.model("Order");

mongoose.connect("mongodb://chellam2:chellam2214@ds161144.mlab.com:61144/ordersservice",()=>{
    console.log("database");   
});

app.post("/order",(req,res)=>{
    var newOrder ={
        CustomerID:mongoose.Types.ObjectId(req.body.CustomerID),
        BookID:mongoose.Types.ObjectId(req.body.BookID),
        initialDate:req.body.initialDate,
        deliverDate:req.body.deliverDate
    }
    
    var order = new Order(newOrder);
 order.save().then(()=>{
     console.log("new order created");
 }).catch((err)=>{
     if(err){
         throw err;
     }
 })
 res.send("order created ");
});


app.get("/orders",(req,res)=>{
   Order.find().then((books)=>{
       res.json(books)
    }).catch(err=>{
        if(err){
            throw err;
        }
    });
    });


    app.get("/order/:id",(req,res)=>{
        Order.findById(req.params.id).then((order)=>{
            if(order){
               axios.get("http://localhost:3022/customer/" + order.CustomerID).then((response)=>{
                   var orderObject = {customerName: response.data.name, bookTitle: ''}
                   axios.get("http://localhost:3002/book/" + order.BookID).then((response)=>{
               
               orderObject.bookTitle=response.data.title
               res.json(orderObject)
               
                });
            });
            }else{
                res.send("Invalid order");
            }
        });
        });
app.listen(3033,()=>{
    console.log("its running");
});





