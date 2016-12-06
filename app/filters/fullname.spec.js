describe('fullName filter', function() {
  var $filter;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_$filter_){
    $filter = _$filter_;
  }));

  it('merges firstName and lastName for given user', function() {
    var fullName = $filter('fullName');
    expect(fullName({ firstName: 'John', lastName: 'Lennon' })).toEqual('John Lennon');
    expect(fullName({ firstName: 'Paul', lastName: 'McCartney' })).toEqual('Paul McCartney');
    expect(fullName({ firstName: 'George', lastName: 'Harrison' })).toEqual('George Harrison');
    expect(fullName({ firstName: 'Ringo', lastName: 'Starr' })).toEqual('Ringo Starr');
  });
});

