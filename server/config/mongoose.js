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

	// Template - schema, model, and seed data

	// var templateSchema = {
	// 		name: String,
	// 		url: String,
	// 		img: String,
	// 		thumbnail: String,
	// 		elements: [{
	// 				name: String,
	// 				tag: String,
	// 				thumbnail: String
	// 			}]
	// };
	// var Template = mongoose.model('Template', templateSchema);
	// Template.find({}).exec(function(err, collection){
	// 	if(collection.length === 0) {
	// 		Template.create({
	// 				name: 'Hero',
	// 				url: '/templates/hero',
	// 				img: 'http://placehold.it/360x500',
	// 				thumbnail: '',
	// 				elements: [{
	// 						name: 'header',
	// 						tag: '<hero-header>',
	// 						thumbnail: ''
	// 					}, {
	// 						name: 'body',
	// 						tag: '<hero-body>',
	// 						thumbnail: ''
	// 					}, {
	// 						name: 'footer',
	// 						tag: '<hero-footer>',
	// 						thumbnail: ''
	// 					}]
	// 		});
	// 		Template.create({
	// 				name: 'Villain',
	// 				url: '/templates/villain',
	// 				img: 'http://placehold.it/360x500',
	// 				thumbnail: '',
	// 				elements: [{
	// 						name: 'header',
	// 						tag: '<villain-header>',
	// 						thumbnail: ''
	// 					}, {
	// 						name: 'body',
	// 						tag: '<villain-body>',
	// 						thumbnail: ''
	// 					}, {
	// 						name: 'footer',
	// 						tag: '<villain-footer>',
	// 						thumbnail: ''
	// 					}]
	// 		});
	// 		Template.create({
	// 				name: 'Lean',
	// 				url: '/templates/lean',
	// 				img: 'http://placehold.it/360x500',
	// 				thumbnail: '',
	// 				elements: [{
	// 						name: 'header',
	// 						tag: '<lean-header>',
	// 						thumbnail: ''
	// 					}, {
	// 						name: 'body',
	// 						tag: '<lean-body>',
	// 						thumbnail: ''
	// 					}, {
	// 						name: 'footer',
	// 						tag: '<lean-footer>',
	// 						thumbnail: ''
	// 					}]
	// 		});
	// 	}
	// });


};