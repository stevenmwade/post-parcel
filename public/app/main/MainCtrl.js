//////////////////////////
// Thumbnail Controller //
//////////////////////////

myApp.controller('MainCtrl', function($scope, Templates){
	Templates.then(function(data){
		$scope.templates = data;
	});
	// $scope.templates = Templates;
	console.log('MainCtrl: ', $scope.templates);

	$scope.moveTop = function() {
		$('html, body').animate({scrollTop: '640px'});
	};
});


























































