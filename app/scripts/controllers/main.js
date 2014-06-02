'use strict';

angular.module('blogApp')
	.controller('MainCtrl', function ($scope, $http) {
		// Store current post
		$scope.currentPost = {}

		$http.get('/posts').success(function(posts) {
			$scope.posts = posts;
			$scope.currentPost = posts[0];
			$scope.postHtml = $scope.currentPost.body;
			
			relatedPosts($scope.currentPost.tags);
		});

		// Retrieve related posts
		var relatedPosts = function(tags) {
			$http.post('/relatedposts', tags).success(function(relatedPosts) {
				$scope.relatedPosts = relatedPosts;
			});
		};

		// Get single post
		$scope.getPost = function(id) {
			$http.get('/post/' + id).success(function(post) {
				$scope.currentPost = post[0];
				$scope.postHtml = $scope.currentPost.body;
				
				relatedPosts($scope.currentPost.tags);
			});
		};
	});
