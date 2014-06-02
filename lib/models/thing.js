'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var PostSchema = new Schema({
		title: String,
		author: String,
		date_created: { type: Date, default: Date.now },
		body: String,
		tags: Array,
		comments: Array,
		permalink: String
	});

// var permalink = title.replace( /\s/g, '_' );
// 	permalink = permalink.replace( /\W/g, '' );

// // Build a new post
// var post = {
// 		"title": title,
//         "author": author,
//         "date_created": new Date(),
//         "body": body,
//         "tags": tags,
//         "comments": [],
//         "permalink":permalink,
//     };

// Validations
// ThingSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Post', PostSchema);
