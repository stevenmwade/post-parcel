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

    $scope.emailFrom = '';
    $scope.emailRecipients = '';
    $scope.emailSubject = '';

    // Setting HTML for email and sending e-mail
    $scope.sendBtn = 'Send Newsletter'
    $scope.sendEmail = function(){
    	$scope.html = $('#drop-zone').html();
        $scope.emailTo = $scope.emailRecipients.split(', ');
    	console.log('HTML for email: ', $scope.html);

        $scope.sendBtn = "Email sent!";
        $('.send-btn').removeClass('btn-default').addClass('btn-send')
    	 
        setTimeout(function(){
    	    $http.post('/api/sendEmail', {
                html: $scope.html,
                from: $scope.emailFrom,
                to: $scope.emailTo,
                subject: $scope.emailSubject
            })
    	    	.success(function(result){
    	    		console.log('HTTP post: ', result);
    	    	})
    	    	.error(function(result, status){
                    console.log('Post error: ', data);
    	    		console.error('Error: ', status);
    	    	});   
        }, 200);
    };
});