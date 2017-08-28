var express = require('express');
var router = express.Router();
var weather = require('openweathermap');
var config = require('../../../config/config');
var response = {};

/*resetting value of response object*/
router.use(function(req,res,next) {
  response = {};
  next();
});

/* GET weather details for next N (default from config) days */
router.get('/cityName/:city', function(req, res, next) {
  var cityName=req.params.city; 
  
  weather.daily({APPID:config.APPID,q:cityName, cnt:config.defaultForecastCount},function(err,result) {
  if(err) {
    console.log(err);
      response = {
          statusCode : 500,
          message : 'Internal Server Error',
          error : err,
          weatherObj : null
      };
    res.json(response);
  } else {
      response = {
          statusCode : 200,
          message : 'SUCCESS',
          error : null,
          weatherObj : result
      };
    res.json(response);
  }
});
});
/*weather details based on location coordinates*/
router.post('/coordinates',function(req,res,next) {
  var lat = req.body.lat;
  var lon = req.body.lon;
  weather.daily({APPID:config.APPID,lat:lat, lon:lon, cnt:config.defaultForecastCount,units:config.weatherUnit},function(err,result) {
  if(err) {
    console.log(err);
      response = {
          statusCode : 500,
          message : 'Internal Server Error',
          error : err,
          weatherObj : null
      };
    res.json(response);
  } else {
    var myDate = new Date(result.list[1].dt*1000);
    console.log(myDate.toLocaleFormat('%d-%b-%Y'));
    response = {
          statusCode : 200,
          message : 'SUCCESS',
          error : null,
          weatherObj : result
      };
    res.json(response);
  }
});
    
});

module.exports = router;