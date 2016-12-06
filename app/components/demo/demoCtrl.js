angular.module("app")

.controller("DemoCtrl", ["NumberService", "NumberFactory", "Number",
                function( NumberService,   NumberFactory,   Number) {
  this.name = "AngularJS";
  this.ns = NumberService;
  this.nf = NumberFactory;
  this.np = Number;
  this.value = 23453;

  this.a = 2;
  this.b = 2;
}])
