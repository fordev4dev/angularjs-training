describe('Example Controller', function() {
  var exampleCtrl, scope;

  beforeEach(angular.mock.module('examples'));

  beforeEach(inject(function($controller, $rootScope, $http) {
    scope = $rootScope.$new(); // produces new child scope
    exampleCtrl = $controller('ExampleCtrl', {
      $scope: scope // applies changes to scope instance using controller constructor (scope object is reused)
    });
  }));

  it('has name', function(){
    expect(scope.name).toEqual('AngularJS');
  });

});
