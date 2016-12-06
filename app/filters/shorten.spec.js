describe('shorten filter', function() {
  var $filter;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('shortens strings', function() {
    var shorten = $filter('shorten');
    expect(shorten('Lorem ipsum')).toEqual('Lorem ipsum');
    expect(shorten('Lorem ipsum dolor sit amet')).toEqual('Lorem ipsum dolor si...');
    expect(shorten('Lorem ipsum dolor sit amet, consectetur adipiscing elit', 60)).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
    expect(shorten('Lorem ipsum dolor sit amet', 5)).toEqual('Lorem...');
  });
});

