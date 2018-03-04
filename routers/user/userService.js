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

service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service._delete = _delete;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    models.User.findAll().then((users) => {
      deferred.resolve(users);
    }).catch((err) => {
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}

function getById(id) {
    var deferred = Q.defer();

    models.User.findOne({where:{ 'id' : id}}).then(user => {
        deferred.resolve(user);
      }).catch((err) => {
        deferred.reject(err.name + ': ' + err.message)
      });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();
    // validation
    models.User.create(userParam).then(() => {
      deferred.resolve();
    }).catch((err) => {
      deferred.reject(err.name + ': ' + err.message);
    });
    return deferred.promise;
}


function update(userParam, id) {
  var deferred = Q.defer();
  // validation
  models.User.update(userParam, {where: {'id' : id}}).then(() => {
    deferred.resolve();
  }).catch((err) => {
    deferred.reject(err.name + ': ' + err.message);
  });
  return deferred.promise;
}

function _delete(id) {
    var deferred = Q.defer();
    models.User.destroy({where: {'id' : id}}).then(() => {
      deferred.resolve();
    }).catch((err) => {
      deferred.reject(err.name + ': ' + err.message);
    });
    return deferred.promise;
}
