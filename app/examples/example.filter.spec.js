describe('Example Filter', function() {
  var $filter;

  beforeEach(angular.mock.module('examples'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('returns 0 when given null', function() {
    var length = $filter('exampleFilter');
    expect(length(null)).toEqual(0);
  });

  it('returns the correct value when given a string of chars', function() {
    var length = $filter('exampleFilter');
    expect(length('abc')).toEqual(3);
  });
});

