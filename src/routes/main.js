var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

/* Main routes */
router.get('/',mainController.index);

module.exports = router;
