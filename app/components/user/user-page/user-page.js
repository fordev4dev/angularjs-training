angular.module("app")

.component("userPage", {
  templateUrl: "components/user/user-page/templates/user-page.html",
  controller: function($scope, UserContext, UsersModel, DepartmentsModel) {
    var ctrl = this;

    this.setOrder = function(order){
      ctrl.order = order.key;
    };

    this.setDepartmentFilter = function(department){
      ctrl.departmentIdFilter = department.id;
      ctrl.fetchUsers();
    };

    this.fetchDepartments = function(){
      DepartmentsModel.getCollection().then(function(response){
        ctrl.departments = response.data;
      });
    };

    this.fetchUsers = function(){
      var promise = UsersModel.getCollection(ctrl.departmentIdFilter, 15, 30)
      .then(function(response){
        ctrl.users = response.data;
      });

      ctrl.collectionPromise = {
        promise: promise,
        message: 'Waiting for users to be loaded...'
      }
    };

    $scope.$watch(function($scope){
      return UserContext.get();
    }, function(newValue, oldValue){
      var user = UserContext.get();
      if (user) {
        var promise = UsersModel.getUser(user.id);
        ctrl.userPromise = {
          promise: promise,
          message: "Waiting for user data..."
        };
        promise.then(function(response){
          ctrl.user = response.data;
        });
      }
    });

    this.$onInit = function(){
      this.order = '';
      this.departmentIdFilter = '';

      this.orderColumns = [{
        key: 'firstName',
        type: 'first name'
      }, {
        key: 'lastName',
        type: 'last name'
      }, {
        key: 'age',
        type: 'age'
      }, {
        key: 'salary',
        type: 'salary'
      }]; 

      this.fetchUsers();
      this.fetchDepartments();
    }
  }
})
