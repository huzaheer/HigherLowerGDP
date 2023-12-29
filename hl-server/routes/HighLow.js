const express = require('express')
const router = express.Router()
const GDP = require('/Users/huzaheeer/Desktop/I_got_this/HigherLowerGDP/hl-server/controllers/GDPcontroller.js')
const {
    create_Country,
    get_single_country,
    get_all_countries,
    delete_country,
    update_country
} = require('../controllers/GDPcontroller')

//setting up a route, everytime / is accessed, we fire the response json object
router.get("/", get_all_countries) 

router.get('/:id', get_single_country)

router.post('/', create_Country)

router.delete('/:id', delete_country)

router.patch('/:id', update_country)

module.exports = router;