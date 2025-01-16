const express = require('express');
const router = express.Router();
const cropController = require('../controllers/cropController');

router.get('/crops', cropController.getAllCrops);
router.post('/crops', cropController.addCrop);

module.exports = router;
