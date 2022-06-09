var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController.js');

/*
 * GET
 */
router.get('/', orderController.getAllOrders);


/*
 * POST
 */
router.post('/', orderController.addNewOrder);


module.exports = router;
