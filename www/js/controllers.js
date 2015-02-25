angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});

.controller('colorsController', function($scope, $http) {
  // "Pets" is a service returning mock data (services.js)
      $http.get("//manage.pineconetassel.com/index.php/api/v1/colors2")
      .success(function(response) {$scope.colors = response;} );
});