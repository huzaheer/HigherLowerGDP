require('dotenv').config()
const express = require('express')
const gameroutes = require('./routes/HighLow')
const mongoose = require('mongoose')
const cors = require('cors');

// creating express app
const app = express()

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen to port 4000 for requests, once you get the request output the following
        app.listen(process.env.PORT, () =>  {
            console.log("connected to db & listening to port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })

//middleware to attach body of request to req object
app.use(express.json())

//some middleware, next is there so that we move onto other middleware such as the get function once this one has been fired
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Use CORS
app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000' // allow to server to accept request from different origin
  }));




//we export all routes to another file and just make our server use those routes
app.use('/api', gameroutes)