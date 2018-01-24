'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.post('/createResult/:userId/:testId',function(req, res){
  models.PsycheTestScore.findAll().then((testName) => {
    if(testName){
      res.send(testName);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createResult/:userId',function(req, res){
  models.PsycheTestScore.findAll().then((testName) => {
    if(testName){
      res.send(testName);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createResult/:userId',function(req, res){
  models.PsycheTestScore.findAll().then((testName) => {
    if(testName){
      res.send(testName);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
