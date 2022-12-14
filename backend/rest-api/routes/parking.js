const express = require('express');
const router = express.Router();
const parking = require('../services/requests/parking');
const NumberCars = require('../services/requests/StatisticsUsingDay')

router.get('/', parking.getParking);
router.get('/:query', parking.searchParking);
router.get('/',NumberCars.getNumberCar);

module.exports = router;