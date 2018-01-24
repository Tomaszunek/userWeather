'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getTestScores',function(req, res){
  models.PsycheTestScore.findAll().then((testScores) => {
    if(testScores){
      res.send(testScores);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
