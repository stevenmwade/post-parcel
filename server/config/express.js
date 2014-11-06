var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	stylus = require('stylus'),
	cookieParser = require('cookie-parser'),
	flash = require('connect-flash'),
	session = require('express-session'),
	passport = require('passport');

module.exports = function (app, config) {
	function compile(str, path){
		return stylus(str).set('filename', path);
	}

	app.set( 'views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');
	app.use(logger('dev'));
	app.use(bodyParser());
	app.use(stylus.middleware(
		{
			src: config.rootPath + '/public',
			compile: compile
		}
	));
	app.use(express.static(config.rootPath + '/public'));

	// Add in the cookieParser and flash middleware so we can
	// use them later
	app.use(cookieParser());
	app.use(flash());

	// Initialize the express session. Needs to be given a secret property
	app.use(session({secret: 'secret'}));

	// Hook in passport to the middleware chain
	app.use(passport.initialize());

	// Hook in the passport session management into the middleware chain.
	app.use(passport.session());
};