'use strict';

/* Directives */


angular.module('telldusGUI').
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
