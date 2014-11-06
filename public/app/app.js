'use strict';

var myApp = angular.module('myApp', [
	'ngResource',
	'ngRoute',
	'ngAnimate'
]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.html5Mode({enabled: true, requireBase: false});
	$routeProvider
		.when('/', {templateUrl: '/partials/main/main', controller: 'MainCtrl'})
		.when('/templates/:template', {templateUrl: '/partials/edit/edit', controller: 'EditCtrl'});
}]);