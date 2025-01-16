const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');

router.get('/market', marketController.getMarketData);

module.exports = router;
