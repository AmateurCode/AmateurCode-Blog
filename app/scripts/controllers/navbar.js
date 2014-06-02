'use strict';

angular.module('blogApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
