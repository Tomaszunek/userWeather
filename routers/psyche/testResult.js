'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getResultMBTI/:idUser',function(req, res){
  models.PsycheTestScore.findAll().then((testResult) => {
    if(testScores){
      res.send(testScores);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getResultEnnegram/:idUser',function(req, res){
  models.PsycheTestScore.findAll().then((testResult) => {
    if(testScores){
      res.send(testScores);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getResultKWLM/:idUser',function(req, res){
  models.PsycheTestScore.findAll().then((testResult) => {
    if(testScores){
      res.send(testScores);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
