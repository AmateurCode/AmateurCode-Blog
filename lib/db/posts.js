'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

//Clear old things, then add things in
// Post.create({ 
// 	title: 'Sixth Post',
// 	author: 'The Amateur',
// 	post: 'Post Content',
// 	tags: ['A tag', 'Another tag']
// }, function(err) {
// 		console.log('finished populating things');
// 	}
// );
