'use strict';

/* global app */
app
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/powers/views/powers.html',
        controller: 'mainCtrl'
      });
  });