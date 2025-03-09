'use strict';


/**
 * Add a new user
 *
 * body User 
 * returns User
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "email" : "",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a user by ID
 *
 * userId String 
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a user by ID
 *
 * userId String 
 * returns User
 **/
exports.getUser = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "email" : "",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of all users
 * Retrieve a paginated list of all registered users.
 *
 * page Integer The page number for pagination. (optional)
 * limit Integer The number of users per page. (optional)
 * returns List
 **/
exports.getUsers = function(page,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "email" : "",
  "username" : "username"
}, {
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "id" : "id",
  "email" : "",
  "username" : "username"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a user by ID
 *
 * body User 
 * userId String 
 * no response value expected for this operation
 **/
exports.updateUser = function(body,userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

