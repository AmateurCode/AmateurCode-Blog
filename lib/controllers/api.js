'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    async = require('async');


exports.post = function(req, res) {
  var postId = req.param('postId');

  return Post.findOne({ _id: postId}).execFind(function (err, post) {
    if (!err) {
      return res.json(post);
    } else {
      return res.send(err);
    }
  });
};

exports.posts = function(req, res) {
  return Post.find({}).sort({ date_created: -1 }).limit(3).execFind(function (err, posts) {
    if (!err) {
      return res.json(posts);
    } else {
      return res.send(err);
    }
  });
};

exports.relatedPosts = function(req, res) {
  return Post.find({ tags: { $in: req.body }}).sort({ date_created: -1 }).limit(3).execFind(function (err, posts) {
    if (!err) {
      return res.json(posts);
    } else {
      return res.send(err);
    }
  });
};
