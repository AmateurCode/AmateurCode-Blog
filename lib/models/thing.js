'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var PostSchema = new Schema({
  title: String,
  author: String,
  date_created: { type: Date, default: Date.now},
  post: String,
  tags: Array
});

// Validations
// ThingSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Post', PostSchema);
