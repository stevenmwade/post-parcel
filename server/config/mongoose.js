var mongoose = require('mongoose');

module.exports = function(config){
	// Set up the connection to mongodb, check for errors, and if open
	// log out that the connection to the db was opened.
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('newsletter db opened');
	});

	// User - schema, model, and seed data
	var userSchema = {
		firstName: String,
		lastName: String,
		username: String
	};
	var User = mongoose.model('User', userSchema);
	User.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			User.create({firstName:'Steven', lastName:'Wade', username:'swade'});
			User.create({firstName:'Heather', lastName:'Wade', username:'hwade'});
			User.create({firstName:'Nicholas', lastName:'Peters', username:'npeters'});
		}
	});

};