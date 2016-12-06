angular.module("app")

.directive("userTable", function(){
  return {
    restrict: "E",
    scope: {
      users: "=",
      order: "=",
      fetch: "&"
    },
    templateUrl: "components/user/user-table/templates/user-table.html",
    controller: function($scope, UserContext, $uibModal, UsersModel, UserBonus){
      $scope.choose = function(user){
        UserContext.set(user);
      }

      $scope.getTotalBonus = function(){
        var checkedUsers = this.users
        .filter(function(user){
          return user.checked;
        });
        return UserBonus.getBonus(checkedUsers);
      };

      $scope.delete = function (user) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'components/user/user-delete/templates/user-delete-modal.html',
          controller: 'UserDeleteModalCtrl',
          size: 'sm',
          resolve: {
            user: function () {
              return user;
            }
          }
        });

        modalInstance.result.then(function(id) {
          UsersModel.deleteUser(id)
            .then(function(){
              $scope.fetch();
            });
        }, function () {
          console.info('Modal dismissed at: ' + new Date());
        });
      };

    }
  }
})
