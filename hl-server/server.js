const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
process.env

//init app
const app = express()

//some more middleware, this will run everytime any domain is accessed, you need next so that it continues on to further relevant middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// This is a route, Whenever you get the '/' domain, we fire the function
// function has two components:
// The "req" (request) and the "res" (response)
app.get('/', (req, res) =>{
    res.json({msg: "hi, hello, i'm just a shy fellow"})
})

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests from port number 3000
    app.listen(process.env.PORT, () => {
        console.log("listening to port 3000")
    })    
  })
  .catch((error) => {
    console.log(error)
  })

