var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Cerberus Mock Server');
});

module.exports = router;
