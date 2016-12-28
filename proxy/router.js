var express = require('express');
var index = require('../controller/index');
var router = express.Router();

router.get('/', index.test);

module.exports = router;