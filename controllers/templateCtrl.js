var Template = require('../models/templates.js');

var templateCtrl = {
	getElements: function(req, res){
		Template.find({}, function(err, result){
			console.log('Get elements, server: ', result);
			res.send(result);
		});
	}
};

module.exports = templateCtrl;