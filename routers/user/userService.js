'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Q = require('q');
const sessions = require('client-sessions');
const config = require('../config');

const router = express.Router();

var service = {};

service.authenticate = authenticate;
service.createDetails = createDetails;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
service.updateLoginTime = updateLoginTime;
service.activeAccount  = updateActiveAcc;

module.exports = service;


function authenticate(username, password) {
    var deferred = Q.defer();

    models.User.findOne({where: { username: username }}).then(function (user) {
        if (user && bcrypt.compareSync(password, user.password)) {
            // authentication successful
            deferred.resolve({
                id: user.id,
                username: user.username,
                email: user.email,
                activeAcc: user.activeAcc,
                last_login: user.last_login,
                token: jwt.sign({ sub: user.id }, config.secretJwt)
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    }).catch(function(err){
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    models.User.findAll().then(function(users) {
      deferred.resolve(users);
    }).catch(function(err){
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();
    // validation
    models.User.findOne({where:{ username: userParam.username }}).then(user => {
      if (user) {          // username already exists
        deferred.reject('Username "' + userParam.username + '" is already taken');
      } else {
        createUser();
      }
    }).catch(err => {
      deferred.reject(err.name + ': ' + err.message);
    });
    function createUser() {
        var user = _.omit(userParam, 'password');
        var salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(userParam.password, salt);

        models.User.create(user).then(() => {
          sendMailRegister(user.username, user.email);
          deferred.resolve();
        }).catch((err) => {
           deferred.reject(err.name + ': ' + err.message);
        });
    }

    return deferred.promise;
}

function sendMailRegister(username, recMail){
  let configMail = config.mailOptions;
  configMail.to = recMail;
  configMail.subject = 'Thanks for register on ' +  username + ' service';
  configMail.html = '<h1>Now you are register ' + username +'!</h1>' +
                '<p>You can login to service now.</p><p>Active your account ' +
                config.hostname + '/user/activeAccount/' + username + '</p>' +
                '<p>Thanks for using our service ' + config.hostname + '</p>';
  config.transporter.sendMail(configMail, function(err, info){
    if(err){
      console.log(err);
    } else {
      console.log('Email sent:' + info.response);
    }
  });
}

function createDetails(userDetailsParam) {
    var deferred = Q.defer();
    // validation
    models.UserDetail.create(userDetailsParam).then(() => {
      updateLoginTime(userDetailsParam.userId).then(() => {
        deferred.resolve();
      });
    }).catch((err) => {
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}

function updateLoginTime(userId) {
    var deferred = Q.defer();
    // validation
    models.User.update({'last_login' : new Date().getTime()/1000},{ where:{ id: userId }}).then(() => {
      deferred.resolve();
    }).catch(err => {
      deferred.reject(err.name + ': ' + err.message);
    });
    return deferred.promise;
}

function updateActiveAcc(username) {
    var deferred = Q.defer();

    models.User.update({'activeAcc' : 1},{ where:{ 'username': username }}).then(() => {
      deferred.resolve();
    }).catch(err => {
      deferred.reject(err.name + ': ' + err.message);
    });
    return deferred.promise;
}

function update(_id, userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne(
                { username: userParam.username },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (user) {
                        // username already exists
                        deferred.reject('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName,
            username: userParam.username,
        };

        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}
