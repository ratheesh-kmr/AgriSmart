const express = require('express');
const router = express.Router();
const transportationController = require('../Controllers/transportationController');

router.get('/transportation', transportationController.getTransportationCost);

module.exports = router;
