myApp.controller('EditCtrl', function($scope, $routeParams, $http, Templates) {
    $scope.params = $routeParams;
    $scope.templates = Templates;

    // $scope.templates = Templates.data();
    // $http.get('/api/getElements')
    // 	.success(function(data){
    // 		console.log('Angular HTTP data: ', data);
    // 		console.log('http - $scope.templates: ', $scope.templates);
    // 		$scope.templates = data;
    // 	});
    console.log('$scope.templates: ', $scope.templates);

    $scope.template = $scope.templates.filter(function(obj) {
    	if(obj.name.toLowerCase() === $scope.params.template)
    		return true;
    });
});