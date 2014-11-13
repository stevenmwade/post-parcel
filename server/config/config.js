var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');



module.exports = {
	// Development NODE_ENV
	// 		- Chooses local port and database
	development: {
		rootPath: rootPath,
		port: process.env.PORT || 8080,
		db: 'mongodb://localhost/newsletter'
	},
	// Production NODE_ENV
	// 		- Chooses heroku port and MongoHQ database
	production: {
		rootPath: rootPath,
		port: process.env.PORT || 80,
		db: process.env.MONGO_URL
	}
}