'use strict';


/**
 * Add a new post
 *
 * body Post 
 * returns Post
 **/
exports.addPost = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "userId" : "userId",
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a post by ID
 *
 * postId String 
 * no response value expected for this operation
 **/
exports.deletePost = function(postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a post by ID
 *
 * postId String 
 * returns Post
 **/
exports.getPost = function(postId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "userId" : "userId",
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all posts
 *
 * returns List
 **/
exports.getPosts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "id",
  "userId" : "userId",
  "content" : "content"
}, {
  "id" : "id",
  "userId" : "userId",
  "content" : "content"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all posts from a specific user
 *
 * userId String 
 * returns List
 **/
exports.getUserPosts = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "id",
  "userId" : "userId",
  "content" : "content"
}, {
  "id" : "id",
  "userId" : "userId",
  "content" : "content"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a post by ID
 *
 * body Post 
 * postId String 
 * no response value expected for this operation
 **/
exports.updatePost = function(body,postId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

