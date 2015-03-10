var faker   = require('faker');

var express = require('express');
var router  = express.Router();

router.get('/', function(req, res, next) {

  var timeout = getRandomInt(1000, 2000);

  setTimeout(function() {
    res.send({
      'name'  : faker.name.findName(),
      'email' : faker.internet.email()
    });
  }, timeout);

});

module.exports = router;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}