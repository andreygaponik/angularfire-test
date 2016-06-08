app.factory('Auth', function($firebaseAuth, $firebaseArray, $firebaseObject, $rootScope) {
	var ref = new Firebase("https://simple-angular-app.firebaseio.com/");
	var auth = $firebaseAuth(ref);
	// $rootScope.messages = $firebaseObject(ref);
	var chld = ref.child('message');
	$rootScope.messageChld = $firebaseObject(chld);

	auth.$onAuth(function(user) {
		$rootScope.user = user;
		console.log(user);
	});

	return {
		login: function() {
			auth.$authWithOAuthPopup('twitter')
			.catch(function(error) {
				console.error(error)
			});
		},

		logout: function() {
			auth.$unauth();
			$rootScope.user = undefined;
		},

		getUser: function() {
			return $rootScope.user;
		},

		getAuth: function() {
			return ref + $rootScope.uid;
		},

		getObj: function() {
			return $rootScope.user;
		},

		getMessage: function() {
			return ref + 'message'			
		}

	};
});