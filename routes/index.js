const express = require('express');
const indexController = require('../controller/index');
const router = express.Router();

/* GET home page. */
router.get('/', indexController);

module.exports = router;
