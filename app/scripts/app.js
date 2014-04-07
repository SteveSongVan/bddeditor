'use strict';

angular
  .module('bddEditApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'EditorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
