const GDP = require('../models/countries')
const mongoose = require('mongoose')

// get all countries
const get_all_countries = async(req,res) => {
    const all_countries = await GDP.find({}).sort({Num_ID: 1})
    res.status(200).json(all_countries)
}

// get a single country
const get_single_country = async(req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID is invalid"})
    }
    const country = await GDP.findById(id)

    if(!country) {
        return res.status(404).json({error: 'Country not found'})
    }

    res.status(200).json(country)
}



// create new country
const create_Country = async (req, res) => {
    const {Num_ID, Country_Area, Year, Unit, INT_GDP, Formatted} = req.body
    try {
        const country = await GDP.create({Num_ID, Country_Area, Year, Unit, INT_GDP, Formatted})
        res.status(200).json(country)
    } catch(error) {
        res.status(400).json({mssg: error.message})
    }
}

// delete a country
const delete_country = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID is invalid"})
    }

    const country = await GDP.findByIdAndDelete(id)
    if(!country) {
        return res.status(404).json({error: 'Country not found'})
    }

    res.status(200).json(country)
}

// update a country
const update_country = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID is invalid"})
    }

    const country = await GDP.findByIdAndUpdate(id, {
        ...req.body
    })

    if(!country) {
        return res.status(404).json({error: 'Country not found'})
    }

    res.status(200).json(country)
}


module.exports = {
    create_Country,
    get_all_countries,
    get_single_country,
    delete_country,
    update_country
}