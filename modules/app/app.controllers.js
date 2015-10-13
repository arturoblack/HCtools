'use strict';

/*global app */

app
  .controller('appCtrl', ['$scope', '$mdSidenav', '$mdUtil',
    function($scope, $mdSidenav, $mdUtil) {
      $scope.toggleLeft = buildToggler('left');
      
      // Build handler to open/close a SideNav; when animation finishes
      // report completion in console
       
      function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
          $mdSidenav(navID)
            .toggle()
            .then(function () {
            });
        },200);
        return debounceFn;
      }
    }
  ]);