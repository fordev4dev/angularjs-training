angular.module("app")

.component("userDetails", {
  bindings: {
    user: '<'
  },
  templateUrl: "components/user/user-details/templates/user-details.html",
  controller: function(){
    this.toggleBio = function(user){
      user.showBio = !user.showBio;
    };
  }
})
