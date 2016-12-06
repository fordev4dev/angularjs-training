angular.module("app")

.directive("menuDirective", function(){
  return {
    restrict: "E",
    templateUrl: "components/menu/menu-directive/templates/menu-directive.html",
    controller: function($scope, title){
      $scope.title = title;
    }
  };
})
