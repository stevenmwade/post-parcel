var mongoose = require('mongoose');

var templateSchema = {
		name: String,
		url: String,
		img: String,
		thumbnail: String,
		elements: [{
				name: String,
				tag: String,
				thumbnail: String
			}]
};
var Template = mongoose.model('Template', templateSchema);
Template.find({}).exec(function(err, collection){
	if(collection.length === 0) {
		Template.create({
				name: 'Hero',
				url: '/templates/hero',
				img: 'http://placehold.it/360x500',
				thumbnail: '',
				elements: [{
						name: 'header',
						tag: '<hero-header>',
						thumbnail: ''
					}, {
						name: 'body',
						tag: '<hero-body>',
						thumbnail: ''
					}, {
						name: 'footer',
						tag: '<hero-footer>',
						thumbnail: ''
					}]
		});
		Template.create({
				name: 'Villain',
				url: '/templates/villain',
				img: 'http://placehold.it/360x500',
				thumbnail: '',
				elements: [{
						name: 'header',
						tag: '<villain-header>',
						thumbnail: ''
					}, {
						name: 'body',
						tag: '<villain-body>',
						thumbnail: ''
					}, {
						name: 'footer',
						tag: '<villain-footer>',
						thumbnail: ''
					}]
		});
		Template.create({
				name: 'Lean',
				url: '/templates/lean',
				img: 'http://placehold.it/360x500',
				thumbnail: '',
				elements: [{
						name: 'header',
						tag: '<lean-header>',
						thumbnail: ''
					}, {
						name: 'body',
						tag: '<lean-body>',
						thumbnail: ''
					}, {
						name: 'footer',
						tag: '<lean-footer>',
						thumbnail: ''
					}]
		});
	}
});

module.exports = Template;