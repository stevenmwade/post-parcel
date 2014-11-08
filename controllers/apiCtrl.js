var Template = require('../models/templates.js');
var sendgrid = require('sendgrid')('swade', 'wade2013');

var email      = new sendgrid.Email();



var apiCtrl = {
	getElements: function(req, res){
		Template.find({}, function(err, result){
			console.log('Get elements, server: ', result);
			res.send(result);
		});
	},

	sendEmail: function(req, res){
		var html = req.body.data;
		console.log('REQ BODY, HTML STUFF: ', req.body.data);
		// Set email data
		email.addTo('audentia.veritas@gmail.com');
		email.addTo('stevenmwade@gmail.com');
		email.setFrom('stevenmwade@gmail.com');
		email.setSubject('Test');
		email.setHtml(html);
		// Send e-mail
		sendgrid.send(email, function(err, json) {
		  if (err) {
		  	return console.error(err);
		  }
		  console.log(json);
		});
	}
};

module.exports = apiCtrl;