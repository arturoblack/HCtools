'use stric'

CombinatorApp
.controller('MainCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', 'Power',
  function($scope, $timeout, $mdSidenav, $mdUtil, Power) {
    console.log('main controller load');
    $scope.toggleLeft = buildToggler('left');

    $scope.load = function() {
      $scope.clearPower();
      $scope.powers = Power.list();
      console.log('Powers ', $scope.powers);
    };

    $scope.setPowerType = function(ptype){
      console.log('set power type: ', ptype);
      for (var i = $scope.powers.length - 1; i >= 0; i--) {
        if($scope.powers[i].icon == ptype){
          $scope.type_powers = $scope.powers[i].powers;
          $scope.clearPower();
        }
      };
    };

    $scope.setPower = function(pname){
      $scope.power = Power.find(pname);
      $scope.bpowers = Power.findBefore($scope.power.action);
      $scope.apowers = Power.findAfter($scope.power.extra_actions);

      
      console.log('set power: ', pname);
      console.log('set bpower: ', $scope.bpowers);
      console.log('set apower: ', $scope.apowers);
    };

    $scope.clearPower = function(){
      $scope.power = false;
      $scope.bpowers = [];
      $scope.apowers = [];
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            console.log("toggle " + navID + " is done");
          });
      },200);
      return debounceFn;
    }
  } 
]);