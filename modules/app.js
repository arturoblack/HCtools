'use strict';

/* global angular */

var app = angular.module('HCToolsApp', [
    'ngMaterial',
    'ngMdIcons',
    'ui.router',
    'gettext'
  ]
);

app.run(function($rootScope) {
    $rootScope.lang = 'en';
  }
);