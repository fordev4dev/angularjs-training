// based on https://nathanleclaire.com/blog/2013/12/13/how-to-unit-test-controllers-in-angularjs-without-setting-your-hair-on-fire/

angular.module('examples')

.controller('NavCtrl', function ($scope, $location) {
  $scope.isActive = function (route) {
    return route === $location.path();
  };
})
