'use strict';


// Declare app level module which depends on filters, and services
angular.module('telldusGUI', [
  'ui.router',
  'nvd3'
])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "app/main/view/main.html",
      controller: 'mainController'
    })
});