myApp.factory('Templates', function($q, $http){
	// Sets the promise
	var deferred = $q.defer();

	// AJAX call for template data
	$http.get('/api/getElements')
		.success(function(data){
			console.log('Template data: ', data);
			// Resolves promise from calling data
			// from the DB
			deferred.resolve(data);
		})
		.error(function(err){
			console.log('Template error: ', err);
			deferred.reject(err);
		});

	// console.log('Deferred.promise: ', deferred.promise);
	
	// Returns promise of the data to be used
	// by each controller
	return deferred.promise;

});