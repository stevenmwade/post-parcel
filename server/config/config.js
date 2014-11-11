var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');



module.exports = {
	development: {
		rootPath: rootPath,
		port: process.env.PORT || 8080,
		db: 'mongodb://localhost/newsletter'
	},
	production: {
		rootPath: rootPath,
		port: process.env.PORT || 80,
		db: 'mongodb://swade:refactoru@dogen.mongohq.com:10032/newsletter'
	}
}