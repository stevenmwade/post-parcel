myApp.controller('EditCtrl', function($scope, $routeParams, $http, Templates) {
    // Grabbing template data
    $scope.params = $routeParams;
    Templates.then(function(data){
    	$scope.template = data;
	    $scope.template = $scope.template.filter(function(obj) {
	    	if(obj.name.toLowerCase() === $scope.params.template)
	    		return true;
	    });
    });

    // Setting HTML for email and sending e-mail
    $scope.sendBtn = 'Send Newsletter'
    $scope.sendEmail = function(){
    	$scope.html = $('#drop-zone').html();
    	console.log('HTML for email: ', $scope.html);

        $scope.sendBtn = "Email sent!";
        console.log($(this));
        $('.send-btn').removeClass('btn-default').addClass('btn-send')
    	 
        setTimeout(function(){
    	    $http.post('/api/sendEmail', {data: $scope.html})
    	    	.success(function(data){
    	    		console.log('HTTP post: ', data);
    	    	})
    	    	.error(function(data, status){
    	    		console.error('Error: ', status);
    	    	});   
        }, 200);
    };
});