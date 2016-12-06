angular.module('examples')

.factory('ExampleFactory', function() {
  return {
    add: function(a, b){
      return a + b;
    },
    throwValue: function(value) {
      throw new Error(value);
    }
  };
})
