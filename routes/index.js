var express = require('express');
var router = express.Router();
var imsdata = require('../models/ims_data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LDN Map' });
});

router.get('/ldc-viz-map', function(req, res, next) {
  res.render('ldc-viz-map', { title: 'LDN Digital' });
});

router.get('/ldc-viz-network', function(req, res, next) {
  res.render('ldc-viz-network', { title: 'LDN Network' });
});

router.get('/map', function(req, res, next) {

var q = imsdata.find();
q.exec(function(err, ims_data) {
    res.json(ims_data);

    //  res.render('index', { title: 'LDN Map', viewstudents: imsdata });
});
});

module.exports = router;
