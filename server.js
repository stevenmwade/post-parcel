var express = require('express'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

// Changes ports and databases by changing from development to production
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// Paths for the changing of ports and databases
var config = require('./server/config/config')[env];
// Sets up the use of stylus and passport and express setup
require('./server/config/express')(app, config);
// Setting up of the database
require('./server/config/mongoose')(config);
// Injecting rotues
require('./server/config/routes')(app);

var server = app.listen(config.port, function() {
	console.log('Express server listening on port ' + config.port);
});