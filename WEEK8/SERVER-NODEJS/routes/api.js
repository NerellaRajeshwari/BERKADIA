
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const db = "mongodb://rajee:chellamkutty2214@ds157248.mlab.com:57248/moviedb";

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Event One",
      "description": "Only teenagers are allowed. Completely vintage theme based.",
      "date": "2019-01-19T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Event Two",
      "description": "Event is for all age groups and it is based on autumn theme party",
      "date": "2019-01-20T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Event Three",
      "description": "Event is for above 18 years age only and it is based on yellow theme party",
      "date": "2019-01-21T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Event Four",
      "description": "Event is for ages and it is based on black and white theme party",
      "date": "2019-01-22T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Event Five",
      "description": "Event is for teenagers and it is based on pink theme party",
      "date": "2019-01-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Event Six",
      "description": " For this event all are allowed. It is a normal theme",
      "date": "2019-01-24T18:25:43.511Z"
    }
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let events = [
    {
      "_id": "1",
      "name": "Special Event One",
      "description": "DSP PopUp Show Event",
      "date": "2019-01-21T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Special Event Two",
      "description": " Arijith Singh PopUp Show Event",
      "date": "2019-01-22T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Special Event Three",
      "description": "Camila Cabello PopUp Show Event",
      "date": "2019-01-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Special Event Four",
      "description": "Ananya Birla PopUp Show Event",
      "date": "2019-01-24T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Special Event Five",
      "description": "Ariana Grade PopUp Show Event",
      "date": "2019-01-25T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Special Event Six",
      "description": " Bebe Rexha PopUp Show Event",
      "date": "2019-01-26T18:25:43.511Z"
    }
  ]
  res.json(events)
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})

module.exports = router;
