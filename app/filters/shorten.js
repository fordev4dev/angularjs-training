angular.module('app')

.filter('shorten', function(){
  return function shorten(text, length){
    length = length || 20;
    return text.length > length ?
    text.substr(0, length) + "..." :
      text;
  };
})
