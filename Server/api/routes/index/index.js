var express = require('express');
var router = express.Router();
var weather = require('openweathermap');
weather.defaults = {
  units:'metric', 
  lang:'en', 
  mode:'json'
};
/* GET home page. */
router.get(['/','/index','/index.html'], function(req, res, next) {
  console.log('rendering index.html');
  res.render('index.html');

});


module.exports = router;
