//////////////////////////
// Thumbnail Controller //
//////////////////////////

myApp.controller('MainCtrl', function($scope, Templates){
	// Grap the template data from promise
	Templates.then(function(data){
		$scope.templates = data;
	});
	// $scope.templates = Templates;
	console.log('MainCtrl: ', $scope.templates);

	// Button to scroll down the page
	$scope.moveTop = function() {
		$('html, body').animate({scrollTop: '640px'});
	};
});


























































