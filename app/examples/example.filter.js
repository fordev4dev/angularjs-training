angular.module('examples')

.filter('exampleFilter', function() {
  return function(text) {
    return ('' + (text || '')).length;
  }
})
