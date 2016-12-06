describe('Example Thing Provider', function() {
  var exampleThing;

  beforeEach(angular.mock.module('examples'));

  beforeEach(function() {
    module(function(ExampleThingProvider) {
      ExampleThingProvider.setBase(8);
    });

    inject(function(_ExampleThing_) {
      exampleThing = _ExampleThing_;
    });
  });

  it('should rebase', function() {
    expect(exampleThing.rebase(1)).toBe(1);
    expect(exampleThing.rebase(7)).toBe(7);
    expect(exampleThing.rebase(8)).toBe(10);
    expect(exampleThing.rebase(9)).toBe(11);
    expect(exampleThing.rebase(10)).toBe(12);
  });

  it('should throw', function() {
    expect(function() {
      exampleThing.throwValue(13);
    }).toThrow();
  });

});

