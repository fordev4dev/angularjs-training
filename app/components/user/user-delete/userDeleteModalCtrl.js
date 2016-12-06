angular.module("app")

.controller('UserDeleteModalCtrl', function ($scope, $uibModalInstance, user) {
  $scope.user = user;

  $scope.ok = function () {
    $uibModalInstance.close($scope.user.id);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
