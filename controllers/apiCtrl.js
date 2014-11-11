var Template = require('../models/templates.js');

if(process.env.SENDGRID_USERNAME) {
	var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
} else {
	var private = require('../../private.js');
	var sendgrid = require('sendgrid')(private.SENDGRID_USERNAME, private.SENDGRID_PASSWORD);	
}


var email = new sendgrid.Email();



var apiCtrl = {
	getElements: function(req, res){
		Template.find({}, function(err, result){
			console.log('Get elements, server: ', result);
			res.send(result);
		});
	},

	sendEmail: function(req, res){
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