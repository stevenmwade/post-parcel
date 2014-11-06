var passport = require('passport'),
	passportConfig = require('../../server/config/passport'),
	authenticationController = require('../../controllers/authenticationCtrl.js'),
	templateCtrl = require('../../controllers/templateCtrl.js');


module.exports = function(app) {
	// Our get request for viewing the login page
	app.get('/auth/login', authenticationController.login);

	// Post received from submitting the login form
	app.post('/auth/login', authenticationController.processLogin);

	// Post received from submitting the signup form
	app.post('/auth/signup', authenticationController.processSignup);

	// Any requests to log out can be handled at this url
	app.get('/auth/logout', authenticationController.logout);

	// Authenticate log-in using Passport
	app.post('/login',
	  passport.authenticate('local'),
	  function(req, res) {
	    // If this function gets called, authentication was successful.
	    // `req.user` contains the authenticated user.
	    res.redirect('/');
	  });


	app.get('/api/getElements', templateCtrl.getElements);


	// Routes:
	// 		Partials and a catch all
	app.get('/partials/*', function(req, res){
		res.render('../../public/app/' + req.params[0]);
	});

	app.get('*', function(req, res){
	    res.render('index');
	});

	app.use(passportConfig.ensureAuthenticated);
};