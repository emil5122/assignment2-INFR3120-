var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' }); // Home Page [1]
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' }); // About [2]
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' }); // Projects [3]
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' }); // Contact [4]
});

module.exports = router;
