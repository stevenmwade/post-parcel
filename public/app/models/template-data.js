myApp.factory('Templates', function($q, $http){
	// var deferred = $q.defer();

	// $http.get('/api/getElements')
	// 	.success(function(data){
	// 		console.log('Template data: ', data);
	// 		deferred.resolve(data);
	// 	})
	// 	.error(function(err){
	// 		console.log('Template error: ', err);
	// 		deferred.reject(err);
	// 	});

	// console.log('Deferred.promise: ', deferred.promise);
	// return deferred.promise;

	// var data;

	// this.get = function() {
	//     // do your ajax call to get your user data and in the response data = response;
	//     $http.get('/api/getElements')
	//     		.success(function(result){
	//     			console.log('Template data: ', data);
	//     			data = result.data;
	//     		})
	//     		.error(function(err){
	//     			console.log('Template error: ', err);
	//     		});
	// }

	// this.data = function() {
	//     return data;
	// }

	var templates = [{
		name: "Hero",
		url: "/templates/hero",
		img: "http://placehold.it/360x500",
		thumbnail: "",
		elements: [
			{
				name: "header",
				tag: "<hero-header>",
				thumbnail: ""
			},
			{
				name: "body",
				tag: "<hero-body>",
				thumbnail: ""
			},
			{
				name: "footer",
				tag: "<hero-footer>",
				thumbnail: ""
			}
		]
	},
	{
		name: "Villain",
		url: "/templates/villain",
		img: "http://placehold.it/360x500",
		thumbnail: "",
		elements: [
			{
				name: "header",
				tag: "<villain-header>",
				thumbnail: ""
			},
			{
				name: "body",
				tag: "<villain-body>",
				thumbnail: ""
			},
			{
				name: "footer",
				tag: "<villain-footer>",
				thumbnail: ""
			}
		]
	},
	{
		name: "Lean",
		url: "/templates/lean",
		img: "http://placehold.it/360x500",
		thumbnail: "",
		elements: [
			{
				name: "header",
				tag: "<lean-header>",
				thumbnail: ""
			},
			{
				name: "body",
				tag: "<lean-body>",
				thumbnail: ""
			},
			{
				name: "footer",
				tag: "<lean-footer>",
				thumbnail: ""
			}
		]
	}];

	return templates


});