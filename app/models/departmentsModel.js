angular.module("app")

.service("DepartmentsModel", ["$http", "baseURL", function($http, baseURL){

  this.getCollection = function(start, end){
    return $http.get(baseURL + "departments", {
      cache: true,
      params: {
        _start: start,
        _end: end
      }
    });
  };
}]);
