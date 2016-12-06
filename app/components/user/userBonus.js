angular.module("app")

.service("UserBonus", function(){
  return {
    getBonus: function(users){
      return users.map(function(user){
        return user.salary;
      }).reduce(function(prev, curr){
        return curr + prev;
      }, 0)
      .toFixed(2);
    }
  }
});
