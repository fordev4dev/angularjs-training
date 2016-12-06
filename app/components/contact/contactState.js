angular.module("app")

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('contact', {
    url: "/contact",
    views: {
      'main': {
        templateUrl: "components/contact/templates/contact.html"
      }
    },
    onEnter: function () {
      console.info("entered contact state");
    }
  });
}])
