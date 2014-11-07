var Template = require('../models/templates.js');
var sendgrid = require('sendgrid');

var apiCtrl = {
	getElements: function(req, res){
		Template.find({}, function(err, result){
			console.log('Get elements, server: ', result);
			res.send(result);
		});
	},

	sendEmail: function(req, res){
		console.log('REQ BODY, HTML STUFF: ', req.body.data);
	}
};

module.exports = apiCtrl;