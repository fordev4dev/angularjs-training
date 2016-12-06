describe('Example Service', function() {
  var exampleService;

  beforeEach(angular.mock.module('examples'));

  beforeEach(inject(function(_ExampleService_) {
    exampleService = _ExampleService_;
  }));

  it('should add', function() {
    expect(exampleService.add(2, 2)).toBe(4);
  });

  it('should throw', function() {
    expect(function() {
      exampleService.throwValue(13);
    }).toThrow();
  });

});

