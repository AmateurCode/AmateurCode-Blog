'use strict';

angular.module('blogApp')
	.controller('MainCtrl', function ($scope, $http) {
		$http.get('/api/posts').success(function(posts) {
			$scope.posts = posts;
			$scope.latestPost = posts[0];
		});
	});
