var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController.js');


router.get('/', ProductController.getProducts);
router.post('/', ProductController.addNewProduct);

module.exports = router;
