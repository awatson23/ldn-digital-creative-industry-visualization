var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LDN Map' });
});

router.get('/network', function(req, res, next) {
  res.render('network', { title: 'LDN Network' });
});

module.exports = router;
