const mongoose = require('mongoose')

const Schema = mongoose.Schema

//defining scheme for data to be added
const countriesSchema = new Schema({
    Num_ID: {
        type: String,
        required: true
    },
    Country_Area: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
    },
    Unit: {
        type: String
    },
    INT_GDP: {
        type: Number,
        required: true
    },
    Formatted: {
        type: String,
        required: true
    }
},{collection: 'GDP'}) //timestamps records when something was added and/or updated

const GDP = mongoose.model('GDP', countriesSchema)
module.exports = GDP