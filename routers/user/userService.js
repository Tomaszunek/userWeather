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

service.getCities = getCities;
service.getStates = getStates;
service.getCountries = getCountries;

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

function getCities() {
    var deferred = Q.defer();

    models.City.findAll().then((cities) => {
      deferred.resolve(cities);
    }).catch((err) => {
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}

function getStates() {
    var deferred = Q.defer();

    models.State.findAll().then((states) => {
      deferred.resolve(states);
    }).catch((err) => {
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}


function getCountries() {
    var deferred = Q.defer();

    models.Country.findAll().then((countries) => {
      deferred.resolve(countries);
    }).catch((err) => {
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}

function getById(id) {
    var deferred = Q.defer();

    models.User.findOne({where:{ 'id' : id}, include : [
      {model: models.City, as : 'UserCity'},
      {model: models.State, as : 'UserState'},
      {model: models.Country, as : 'UserCountry'}]}).then(user => {
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
