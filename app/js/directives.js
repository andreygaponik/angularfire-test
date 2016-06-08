app.directive('rtInput', function($rootScope) {
	return {
		restrict: 'E', // element
		scope: {
			superman: '='
		},
		templateUrl: '../views/view.tpl.html',
		// link: function(scope) {
		// 	$timeout(function() {
		// 		scope.superman = 'asd';
		// 	}, 4000);
		// }
		link: function($scope, element, $rootScope) {
			$scope.$watch("rtInput", function() {
				
				var inputId = element[0].querySelector('#input');
				var textContainer = element[0].querySelector('#textContainer');
				var btn = element[0].querySelector('#btn');

        inputId.onkeyup = function(e) {
					textContainer.innerText = inputId.innerText;
				}



				// btn.onclick = function() {
				// 	console.log(textContainer.innerText);
				// 	$scope.superman = textContainer.innerText; 

				// $rootScope.rootSuperMan = $scope.superman;
				// console.log($rootScope.rootSuperMan);
				// console.log($rootScope.mainFunc)
				// }

      });
		},
		controller: function($scope) {
			btn.onclick = function() {
				console.log($rootScope.user);
				$scope.superman = textContainer.innerText; 
				// $rootScope.messages.$save({
				// 	text: textContainer.innerText
				// });

				$rootScope.messageChld.$save().then(function() {
	        console.log('Message saved!');

	        $rootScope.messageChld.$value = $scope.superman;

	        $rootScope.messageChld.$save();

	      });	      
			};
			$rootScope.messageChld.$loaded().then(function() {
			 	textContainer.innerText = $rootScope.messageChld.$value;			 	
				input.innerText = textContainer.innerText;
			});
		}
	};
})