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

//Get GDP of country


// Get GDP of country
const get_GDP = async (req, res) => {
    const { id } = req.params;
    const numId = Math.trunc(parseInt(id, 10)); // Make sure this is an integer

    if (isNaN(numId) || numId < 1 || numId >= 243) {
        return res.status(404).json({ error: "Invalid Num_ID, needs to be between 1 and 229" });
    }
    try {
        const GDP_Country = await GDP.find({ Num_ID: numId }); // numId must be an integer here

        if (!GDP_Country || GDP_Country.length === 0) {
            return res.status(404).json({ error: 'No GDP data found for the provided Num_ID' });
        }

        res.status(200).json(GDP_Country);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    create_Country,
    get_all_countries,
    get_single_country,
    delete_country,
    update_country,
    get_GDP
}