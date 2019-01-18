const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
mongoose.connect("mongodb://chellam1:chellam14@ds161104.mlab.com:61104/customerservice",()=>{
    console.log("vvvvvvvvv");
});

require("./Customer")
const Customer = mongoose.model("Customer");


app.post("/customer",(req,res)=>{
    var newCustomer ={
        name:req.body. name,
        age:req.body.age,
        address:req.body.address
    }
    //creating anew book with attributes
    var customer = new Customer(newCustomer);
 customer.save().then(()=>{
     console.log("customer created");
 }).catch((err)=>{
     if(err){
         throw err;
     }
 })
 res.send("customer created ");
});

app.get("/customers",(req,res)=>{
    Customer.find().then((customers)=>{
       res.json(customers)
    }).catch(err=>{
        if(err){
            throw err;
        }
    });
    });

    app.get("/customer/:id",(req,res)=>{
        Customer.findById(req.params.id).then((customer)=>{
            if(customer){
                res.json(customer)
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            if(err){
                throw err;
            }
        });
        });
        app.delete("/customer/:id",(req,res)=>{
            Customer.findOneAndRemove(req.params.id).then(()=>
            {
                res.send("customer successfully removed")
            }).catch(err=>{
                if(err){
                    throw err;
                }
            });
        });
        
app.listen(3022,()=>{
    console.log("its running");
});
