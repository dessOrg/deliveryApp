angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/grocer', {
			templateUrl: 'views/grocer.html',
			controller: 'GrocerController'
		})

		.when('/vege', {
			templateUrl: 'views/vege.html',
			controller: 'VegeController'
		})

		.when('/food', {
			templateUrl: 'views/food.html',
			controller: 'FoodController'
		})

		.when('/body', {
			templateUrl: 'views/body.html',
			controller: 'BodyController'
		});

	$locationProvider.html5Mode(true);

}]);
