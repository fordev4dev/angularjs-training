// this component is hardly composable
// instead, ui/select-widget is being used

angular.module("app")

.component("userTableForm", {
  bindings: {
    onOrderChange: '&',
    onDepartmentChange: '&',
    departments: '<'
  },
  templateUrl: "components/user/user-table-form/templates/user-table-form.html"
})
