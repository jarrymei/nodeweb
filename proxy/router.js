var express = require('express');
var index = require('../controller/index');
var router = express.Router();

router.get('/test', index.test);

module.exports = router;