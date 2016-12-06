angular.module("app")

.service("UserContext", function(){
  var chosenUser;

  return {
    init: function(){
      chosenUser = undefined;
    },
    get: function(){
      return chosenUser;
    },
    set: function(user){
      chosenUser = user;
    }
  }
});
