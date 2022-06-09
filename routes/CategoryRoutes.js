var express = require('express');
var controller = require('../controllers/CategoryController');
var router = express.Router();

router.get('/', controller.geyAllCategories);
router.post('/',controller.addNewCategory);

module.exports = router;
