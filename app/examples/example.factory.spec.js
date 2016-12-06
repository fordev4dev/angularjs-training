describe('Example Factory', function() {
  var exampleFactory;

  beforeEach(angular.mock.module('examples'));

  beforeEach(inject(function(_ExampleFactory_) {
    exampleFactory = _ExampleFactory_;
  }));

  it('should add', function() {
    expect(exampleFactory.add(2, 2)).toBe(4);
  });

  it('should throw', function() {
    expect(function() {
      exampleFactory.throwValue(13);
    }).toThrow();
  });

});
