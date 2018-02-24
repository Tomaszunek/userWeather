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
service.getAllQuestion = getAllQuestion;
service.getAllAnswers = getAllAnswers;
service.createUserAnswer = createUserAnswer;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;


function getAll() {
    var deferred = Q.defer();

    models.PsycheTestName.findAll().then(function(psycheTests) {
      deferred.resolve(psycheTests);
    }).catch(function(err){
      deferred.reject(err.name + ': ' + err.message);
    });
    return deferred.promise;
}

function getAllQuestion(id) {
    var deferred = Q.defer();

    models.PsycheQuestion.findAll({where: {'testId' : id}}).then(function(psycheQuestion) {
      deferred.resolve(psycheQuestion);
    }).catch(function(err){
      deferred.reject(err.name + ': ' + err.message);
    });
    return deferred.promise;
}

function getAllAnswers(testId) {
    var deferred = Q.defer();

    models.PsycheAnswer.findAll({include: [{model: models.PsycheQuestion, as: 'PsycheAnswerQuestion',where: {'testId' : testId}}]}).then(function(psycheAnsers){
      deferred.resolve(psycheAnsers);
    }).catch(function(err){
      deferred.reject(err.name + ': ' + err.message);
    });

    return deferred.promise;
}

function createUserAnswer(userId, questionId, answerId) {
    var deferred = Q.defer();

    models.PsycheUserAnswer.findOne({where: {'userId' : userId, 'questionId' : questionId}}).then((userAnswers) => {
      if(userAnswers){
        models.PsycheUserAnswer.update({'answerId' : answerId}, {where: [{'userId' : userId}, {'questionId' : questionId}]}).then((userAnswer2) => {
          deferred.resolve(userAnswer2);
        }).catch(function(err){
          deferred.reject(err.name + ': ' + err.message);
        });
      } else {
        models.PsycheUserAnswer.create({'userId' : userId, 'questionId' : questionId, 'answerId' : answerId}).then((userAnswer2) => {
            deferred.resolve(userAnswer2);
        }).catch(function(err){
          deferred.reject(err.name + ': ' + err.message);
        });
      }
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
    db.users.findOne(
        { username: userParam.username },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password');

        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);

        db.users.insert(
            user,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

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
