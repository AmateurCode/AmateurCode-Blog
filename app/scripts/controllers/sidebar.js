'use strict';

angular.module('blogApp')
  .controller('SidebarCtrl', function ($scope, $http) {
    $scope.links = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'About',
      'link': '#'
    },
    {
      'title': 'Contact',
      'link': '#'
    }];	
  });
