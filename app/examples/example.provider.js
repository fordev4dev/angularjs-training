angular.module('examples')

.provider('ExampleThing', function() {
  var base = 10;

  this.setBase = function(value){
    base = value;
  };

  this.$get = function() {
    return {
      rebase: function(value) {
        return parseInt(Number(value).toString(base));
      },
      throwValue: function(value) {
        throw new Error(value);
      }
    }
  };
})
