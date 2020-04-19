var express = require('express');
var router = express.Router();
var imsdata = require('../models/ims_data.js');
var Data = require('../models/Data.js');
var Orgdata = require('../models/Orgdata.js');

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

router.post('/ldc-viz-network/new', function(req, res, next) {
  var newdata = new Data();
    newdata.first_name = req.body.fname;
    newdata.last_name = req.body.lname;
    newdata.school_name = req.body.school;
    newdata.graduation_year = req.body.grad;
    newdata.jobtitle = req.body.job_title;
    newdata.company_name = req.body.company;
    newdata.save(function (err, data) {
      if (err) return console.error(err);
      // res.json(data);
  });

  var orgdata = new Orgdata();
    orgdata.company_name = req.body.fname;
    orgdata.company_address = req.body.address;
    orgdata.company_summary = req.body.csummary;
    orgdata.establishment_date = req.body.est_date;
    orgdata.industry_sector = req.body.ind_sector;
    orgdata.save(function (err, data) {
      if (err) return console.error(err);
      // res.json(data);
  });
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

//cadence's project routes
router.get('/cadence-virus/index.html', function(req, res, next) {
  res.sendFile(__dirname + 'public/cadence-virus/index.html');
});

router.get('/cadence-virus/index.html', function(req, res, next) {
  res.sendFile(__dirname + 'public/cadence-turbine/index.html');
});


router.get('/map', function(req, res, next) {

var q = imsdata.find();
q.exec(function(err, ims_data) {
    res.json(ims_data);

    //  res.render('index', { title: 'LDN Map', viewstudents: imsdata });
});
});

module.exports = router;
