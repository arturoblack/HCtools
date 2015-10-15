'use strict';

/*global app */

app
  .controller('terrainCtrl', ['$scope',
    function($scope) {
      $scope.load = function() {
        $scope.var = 'terreno';
      };
    } 
  ]);