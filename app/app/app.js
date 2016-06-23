'use strict';


// Declare app level module which depends on filters, and services
angular.module('telldusGUI', [
  'ui.router',
  'telldusGUI.filters',
  'telldusGUI.services',
  'telldusGUI.directives',
  'telldusGUI.controllers',
  'telldusGUI.main'
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