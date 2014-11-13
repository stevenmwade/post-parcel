myApp.controller('EditCtrl', function($scope, $routeParams, $http, Templates) {
    // Grabbing template name
    $scope.params = $routeParams;
    // Grabs the templates from the promise then 
    // filters it to the correct template data
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
        // Grabs HTML from the #drop-zone
    	$scope.html = $('#drop-zone').html();
        // Splits the emails in the text area into an array
        $scope.emailTo = $scope.emailRecipients.split(', ');
    	console.log('HTML for email: ', $scope.html);

        // Changes text of the button when sent
        $scope.sendBtn = "Email sent!";
    	 
        // Sends data to apiController for sending through SendGrid
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
        }, 100);
    };
});