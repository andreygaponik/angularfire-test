app.controller('AuthCtrl', function($scope, $timeout, $rootScope, Auth, $location, $firebaseObject) {
	$scope.hello = 'world';

	$scope.login = Auth.login;
	$scope.logout = Auth.logout;
	$scope.user = $rootScope.user;

	$rootScope.$watch('user', function(user) {
		$scope.user = user;
	});

	$scope.getAuth = Auth.getAuth();
	$rootScope.rootGetAuth = $scope.getAuth;

	$rootScope.getObj = Auth.getObj();

	$rootScope.getMessage = Auth.getMessage();
});

app.controller('HomeCtrl', function($scope){
	console.log('test')
})