var express = require('express');
var router = express.Router();
var imsdata = require('../models/ims_data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fanshawe 3D Visualization Showcase' });
});

router.get('/ldc-viz-map', function(req, res, next) {
  res.render('ldc-viz-map', { title: 'LDN Digital' });
});

router.get('/ldc-viz-network', function(req, res, next) {
  res.render('ldc-viz-network', { title: 'LDN Network' });
});

router.get('/wind-turbines', function(req, res, next) {
  res.render('wind-turbines', { title: 'Wind Turbines' });
});

router.get('/virus-touchscreens', function(req, res, next) {
  res.render('virus-touchscreens', { title: 'Virus Touchscreens' });
});

router.get('/covid-19-project', function(req, res, next) {
  res.render('covid-19-project', { title: 'Observing COVID-19 cases' });
});

router.get('/map', function(req, res, next) {

var q = imsdata.find();
q.exec(function(err, ims_data) {
    res.json(ims_data);

    //  res.render('index', { title: 'LDN Map', viewstudents: imsdata });
});
});

module.exports = router;
