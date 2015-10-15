'use strict';

/* global app */
app
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/powers/views/powers.html',
        controller: 'powerCtrl'
      })
      .state('powers', {
        url: '/powers',
        templateUrl: 'modules/powers/views/powers.html',
        controller: 'powerCtrl'
      })
      .state('abilities', {
        url: '/abilities',
        templateUrl: 'modules/abilities/views/main.html',
        controller: 'abilityCtrl'
      })
      .state('terrain', {
        url: '/terrain',
        templateUrl: 'modules/terrain/views/main.html',
        controller: 'terrainCtrl'
      });
  });