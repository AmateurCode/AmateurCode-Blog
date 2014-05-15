'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    async = require('async');

exports.posts = function(req, res) {
  return Post.find({}).sort({ date_created: -1 }).limit(5).execFind(function (err, posts) {
    if (!err) {
      return res.json(posts);
    } else {
      return res.send(err);
    }
  });
};
