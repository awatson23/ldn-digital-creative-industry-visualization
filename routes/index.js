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

router.post('/ldc-viz-network/individual_data', function(req, res, next) {
  var newdata = new Data();
    newdata.first_name = req.body.fname;
    newdata.last_name = req.body.lname;
    newdata.school_name = req.body.school;
    newdata.graduation_year = req.body.grad;
    newdata.jobtitle = req.body.job_title;
    newdata.company_name = req.body.company;
    newdata.frameworks.framework1 = req.body.magento;
    newdata.frameworks.framework2 = req.body.drupal;
    newdata.frameworks.framework3 = req.body.wordpress;
    newdata.frameworks.framework4 = req.body.ruby;
    newdata.frameworks.framework5 = req.body.laravel;
    newdata.frontends.frontend1 = req.body.javascript;
    newdata.frontends.frontend2 = req.body.html;
    newdata.frontends.frontend3 = req.body.css;
    newdata.frontends.frontend4 = req.body.angular;
    newdata.frontends.frontend5 = req.body.bootstrap;
    newdata.frontends.frontend6 = req.body.greensock;
    newdata.backends.backend1 = req.body.php;
    newdata.backends.backend2 = req.body.mongodb;
    newdata.backends.backend3 = req.body.mysql;
    newdata.backends.backend4 = req.body.redis;
    newdata.backends.backend5 = req.body.python;
    newdata.backends.backend6 = req.body.java;
    newdata.backends.backend7 = req.body.nodejs;
    
    newdata.save(function (err, data) {
      if (err) return console.error(err);
      // res.json(data);
  });
});

router.post('/ldc-viz-network/organisation_data', function(req, res, next) {
  var orgdata = new Orgdata();
    orgdata.company_name = req.body.fname;
    orgdata.company_address = req.body.address;
    orgdata.company_summary = req.body.csummary;
    orgdata.establishment_date = req.body.est_date;
    orgdata.industry_sector = req.body.ind_sector;
    orgdata.frameworks.framework1 = req.body.magento;
    orgdata.frameworks.framework2 = req.body.drupal;
    orgdata.frameworks.framework3 = req.body.wordpress;
    orgdata.frameworks.framework4 = req.body.ruby;
    orgdata.frameworks.framework5 = req.body.laravel;
    orgdata.frontends.frontend1 = req.body.javascript;
    orgdata.frontends.frontend2 = req.body.html;
    orgdata.frontends.frontend3 = req.body.css;
    orgdata.frontends.frontend4 = req.body.angular;
    orgdata.frontends.frontend5 = req.body.bootstrap;
    orgdata.frontends.frontend6 = req.body.greensock;
    orgdata.backends.backend1 = req.body.php;
    orgdata.backends.backend2 = req.body.mongodb;
    orgdata.backends.backend3 = req.body.mysql;
    orgdata.backends.backend4 = req.body.redis;
    orgdata.backends.backend5 = req.body.python;
    orgdata.backends.backend6 = req.body.java;
    orgdata.backends.backend7 = req.body.nodejs;
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
