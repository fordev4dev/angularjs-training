angular.module('examples')

.service('ExampleService', function() {
  this.add = function(a, b){
    return a + b;
  }
  this.throwValue = function(value) {
    throw new Error(value);
  }
})
