myApp.controller('EditCtrl', function($scope, $routeParams, $http, Templates) {
    $scope.params = $routeParams;
    Templates.then(function(data){
    	$scope.template = data;
	    $scope.template = $scope.template.filter(function(obj) {
	    	if(obj.name.toLowerCase() === $scope.params.template)
	    		return true;
	    });
    });

    $scope.getHtml = function() {
    	$scope.html = $('#drop-zone').html();
    	console.log('HTML for email: ', $scope.html);
    };

    $scope.sendEmail = function(){
    	$scope.html = $('#drop-zone').html();
    	console.log('HTML for email: ', $scope.html);
    	 
	    $http.post('/api/sendEmail', {data: $scope.html})
	    	.success(function(data){
	    		console.log('HTTP post: ', data);
	    	})
	    	.error(function(data, status){
	    		console.error('Error: ', status);
	    	});
    }
});