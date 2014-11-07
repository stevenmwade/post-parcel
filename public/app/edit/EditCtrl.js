myApp.controller('EditCtrl', function($scope, $routeParams, $http, Templates) {
    $scope.params = $routeParams;
    Templates.then(function(data){
    	$scope.template = data;
	    $scope.template = $scope.template.filter(function(obj) {
	    	if(obj.name.toLowerCase() === $scope.params.template)
	    		return true;
	    });
    });
});