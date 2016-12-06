angular.module("app")

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('users', {
    url: "/users",
    views: {
      'main': {
        // instead of templateUrl
        template: "<user-page></user-page>"
      }
    },
    onEnter: function () {
      console.info("entered users state");
    }
  });
}])
