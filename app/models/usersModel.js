angular.module("app")

.service("UsersModel", function($http, baseURL){

  function addFields(user){
    user.checked = false;
    user.showBio = false;

    user.hiredAtDate = new Date(user.hiredAt);
    user.expiresAtDate = new Date(user.expiresAt);
    if (user.retiresAt){
      user.retiresAtDate = new Date(user.retiresAt);
    }

    var expiresDiff = user.expiresAtDate - new Date();
    if (expiresDiff > 0) {
      user.expired = false;
      user.daysToExpire = Math.floor(expiresDiff / 24 / 1000 / 60 / 60);
    } else {
      user.expired = true;
    }
    var hiredDiff = new Date() - user.hiredAtDate;
    user.yearsSinceHired = Math.floor(hiredDiff / 365 / 24 / 1000 / 60 / 60);
  }

  this.getCollection = function(departmentId, start, end){
    var params = {};
    if (start) {
      params._start = start;
    }
    if (end) {
      params._end = end;
    }
    if (departmentId) {
      params.departmentId = departmentId;
    }
    return $http.get(baseURL + "users", { params: params })
      .then(function(response){
        response.data.forEach(addFields);
        return response;
      });
  };

  this.getUser = function(id){
    return $http.get(baseURL + "users/" + id)
      .then(function(response){
        addFields(response.data);
        return response;
      });
  };

  this.deleteUser = function(id){
    return $http.delete(baseURL + "users/" + id);
  };
});
