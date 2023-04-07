const express = require('express');
const { getCountriesTags } = require('../controllers/CountriesController');
const router = express.Router();


router.get('/get-countries-tags', getCountriesTags);

module.exports = router;