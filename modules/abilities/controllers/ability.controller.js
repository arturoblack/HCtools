'use strict';

/*global app */

app
  .controller('abilityCtrl', ['$scope',
    function($scope) {
      $scope.load = function() {
        $scope.var = 'hola';
      };
    } 
  ]);