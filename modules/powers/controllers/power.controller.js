'use strict';

/*global app */

app
  .controller('powerCtrl', ['$scope', '$timeout', 'Power',
    function($scope, $timeout, Power) {

      $scope.load = function() {
        $scope.clearPower();
        $scope.powers = Power.list();
      };

      $scope.setPowerType = function(ptype){
        for (var i = $scope.powers.length - 1; i >= 0; i--) {
          if($scope.powers[i].icon == ptype){
            $scope.type_powers = $scope.powers[i].powers;
            $scope.clearPower();
          }
        }
      };

      $scope.setPower = function(pname){
        $scope.power = Power.find(pname);
        $scope.bpowers = Power.findBefore($scope.power.action);
        $scope.apowers = Power.findAfter($scope.power.extra_actions);
      };

      $scope.clearPower = function(){
        $scope.power = false;
        $scope.bpowers = [];
        $scope.apowers = [];
      };
    } 
  ]);