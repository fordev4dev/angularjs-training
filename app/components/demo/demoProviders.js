angular.module("app")

.service('NumberService', function() {
    this.octify = function (x) {
        return Number(x).toString(8);
    }
})

.factory('NumberFactory', function() {
    return {
        octify: function (x) {
            return Number(x).toString(8);
        }
    };
})

.provider('Number', function() {
  this.base = 10;

  this.$get = function() {
    var base = this.base;
    return {
      calculate: function(x) {
        return Number(x).toString(base);
      }
    }
  };

  this.setBase = function(base){
    this.base = base;
  }
})

.config(function(NumberProvider){
  NumberProvider.setBase(6);
})
