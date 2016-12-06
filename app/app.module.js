angular.module('app', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.router',
  'cgBusy',
  'app.config',
  'examples'
])

.config(function($urlRouterProvider){
  // $urlRouterProvider.when('', '/demo');
  $urlRouterProvider.otherwise('/demo');
})

// decorator that multiplies UserBonus result by a constant bonusFactor (see config.json)
// just an example decorator
.config(function($provide){
  $provide.decorator('UserBonus', function UserBonusDecorator($delegate, bonusFactor) {
    var originalBonus = $delegate.getBonus;
    $delegate.getBonus = function decoratedgetBonus(users) {
      var result = originalBonus.apply($delegate, arguments);
      return result * bonusFactor;
    };
    return $delegate;
  });
})

.run(function(){
  console.info('inside run');
})
