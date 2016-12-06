angular.module("app")

.component("selectWidget", {
  bindings: {
    onChange: '&',
    elements: '<',
    name: '@',
    defaultOption: '@'
  },
  templateUrl: "components/ui/select-widget/templates/select-widget.html"
})
