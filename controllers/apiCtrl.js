var Template = require('../models/templates.js');

// Initialize the SendGrid API with developer credentials
// 		- If the process.env is set, use those variables (production)
// 		- If not, use credentials set in the private file (development)
if(process.env.SENDGRID_USERNAME) {
	var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
} else {
	var private = require('../private.js');
	var sendgrid = require('sendgrid')(private.SENDGRID_USERNAME, private.SENDGRID_PASSWORD);	
}

// Initialize a SendGrid email object
var email = new sendgrid.Email();



var apiCtrl = {
	// Gets the template sections for the client
	getElements: function(req, res){
		Template.find({}, function(err, result){
			console.log('Get elements, server: ', result);
			res.send(result);
		});
	},

	// AJAX call for the sending of the email
	sendEmail: function(req, res){
		// Set each variable for the necessary
		// email pieces
		var html = req.body.html,
			from = req.body.from,
			to = req.body.to,
			subject = req.body.subject;

		console.log('REQ BODY, HTML STUFF: ', req.body);
		// Set email data
		email.to = to;
		email.setFrom(from);
		email.setSubject(subject);
		email.setHtml(html);

		console.log('Filled email: ', email);
		// Send e-mail
		sendgrid.send(email, function(err, json) {
		  if (err) {
		  	console.error(err)
		  	return res.send(err);
		  }
		  console.log(json);
		  res.send(json);
		});
	}
	
};

module.exports = apiCtrl;