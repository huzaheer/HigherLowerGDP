const express = require('express')
const router = express.Router()
const GDP = require('../models/countries')

//setting up a route, everytime / is accessed, we fire the response json object
router.get("/", (req, res) => {
    res.json({mssg: "hallelujah"})
}) 

router.get('/:id', (req, res) => {
    res.json({mssg: "get a single country"})
})

router.post('/', async (req, res) => {
    const {Num_ID, Country_Area, Year, Unit, INT_GDP, Formatted} = req.body
    try {
        const country = await GDP.create({Num_ID, Country_Area, Year, Unit, INT_GDP, Formatted})
        res.status(200).json(country)
    } catch(error) {
        res.status(400).json({mssg: error.message})
    }
})

module.exports = router;