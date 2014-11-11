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
				img: '/app/templates/hero/img/thumbnail.png',
				thumbnail: '',
				elements: [{
						name: 'header',
						tag: '<hero-header>',
						thumbnail: '/app/templates/hero/img/header.png'
					}, {
						name: 'body',
						tag: '<hero-body>',
						thumbnail: '/app/templates/hero/img/body.png'
					}, {
						name: 'footer',
						tag: '<hero-footer>',
						thumbnail: '/app/templates/hero/img/footer.png'
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
				name: 'Bistander',
				url: '/templates/bistander',
				img: 'http://placehold.it/360x500',
				thumbnail: '',
				elements: [{
						name: 'header',
						tag: '<bistander-header>',
						thumbnail: ''
					}, {
						name: 'body',
						tag: '<bistander-body>',
						thumbnail: ''
					}, {
						name: 'footer',
						tag: '<bistander-footer>',
						thumbnail: ''
					}]
		});
		Template.create({
				name: 'Victim',
				url: '/templates/victim',
				img: 'http://placehold.it/360x500',
				thumbnail: '',
				elements: [{
						name: 'header',
						tag: '<victim-header>',
						thumbnail: ''
					}, {
						name: 'body',
						tag: '<victim-body>',
						thumbnail: ''
					}, {
						name: 'footer',
						tag: '<victim-footer>',
						thumbnail: ''
					}]
		});
		Template.create({
				name: 'Volunteer',
				url: '/templates/volunteer',
				img: 'http://placehold.it/360x500',
				thumbnail: '',
				elements: [{
						name: 'header',
						tag: '<volunteer-header>',
						thumbnail: ''
					}, {
						name: 'body',
						tag: '<volunteer-body>',
						thumbnail: ''
					}, {
						name: 'footer',
						tag: '<volunteer-footer>',
						thumbnail: ''
					}]
		});
		Template.create({
				name: 'Traitor',
				url: '/templates/traitor',
				img: 'http://placehold.it/360x500',
				thumbnail: '',
				elements: [{
						name: 'header',
						tag: '<traitor-header>',
						thumbnail: ''
					}, {
						name: 'body',
						tag: '<traitor-body>',
						thumbnail: ''
					}, {
						name: 'footer',
						tag: '<traitor-footer>',
						thumbnail: ''
					}]
		});
	}
});

module.exports = Template;