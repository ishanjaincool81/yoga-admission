const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController.js');

console.log('Router Loaded');

// route for checking of the API
router.get("/payment", paymentController.CompletePayment);

module.exports = router;