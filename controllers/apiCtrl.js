var Template = require('../models/templates.js');

var sendgrid = require('sendgrid')('swade', 'wade2013');

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

		console.log('Process Env: ', sendgridUsername);
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