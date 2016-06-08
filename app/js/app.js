'use strict';

var app = angular.module('app', [
	'firebase',
	'ngRoute'
]);

var RouterConfiguration = function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: '../views/home.tpl.html',
			controller: 'HomeCtrl'
		})
		.otherwise({
      redirectTo: '/home'
    });
};

RouterConfiguration.$inject = ['$routeProvider'];

app.config(RouterConfiguration);

