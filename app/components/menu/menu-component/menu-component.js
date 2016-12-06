angular.module("app")

.component("menuComponent", {
  templateUrl: "components/menu/menu-component/templates/menu-component.html",
  controller: function(title){
    this.title = title;
  }
})
