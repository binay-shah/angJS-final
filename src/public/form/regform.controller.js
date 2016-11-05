(function() {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject=['MenuService'];
function RegistrationController(MenuService){
  var reg = this;
  var user = {};
  reg.user = user;
  reg.user.firstname="";
  reg.user.lastname="";
  reg.user.phone="";
  reg.user.email="";
  reg.user.short_name="";
  reg.error_msg="";
  reg.save_msg="";

  reg.submit = function(){
    reg.error_msg="";
    reg.save_msg="";

       MenuService.getFavouriteDish(reg.user.short_name).then(function(response){
         console.log(response);
         reg.user.description=response.data.description;
         reg.user.title=response.data.name;
           MenuService.saveUserData(reg.user);
           reg.save_msg = "Your information has been saved";


      }).catch(function(error){
        console.log(error);
        reg.error_msg = "No such menu number exists";
      });


  }
}

})();
