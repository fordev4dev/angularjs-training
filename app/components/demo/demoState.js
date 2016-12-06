angular.module("app")

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('demo', {
    url: "/demo",
    views: {
      'main': {
        templateUrl: "components/demo/templates/demo.html",
        controller: "DemoCtrl as demo"
      }
    },
    onEnter: function () {
      console.info("entered demo state");
    }
  });
}])
