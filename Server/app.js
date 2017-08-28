var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./api/routes/index/index');
var weather = require('./api/routes/weather/weather');
var config = require('./config/config');
var app = express();

var port = 8081,
publicDir = '../Client/dist';
// view engine setup
app.set('views', publicDir);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// // uncomment after placing your favicon in /public
// app.use(favicon(publicDir + '/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicDir));


app.use('/', index);
app.use('/api/weather', weather);



var server = app.listen(port, function() {
  console.log('Server started on port : ' + server.address().port);
});


module.exports = app;