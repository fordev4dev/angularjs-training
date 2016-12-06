angular.module('app')

.filter('fullName', function(){
  return function fullName(user){
    return user.firstName + " " + user.lastName;
  };
})
