'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getQuestionsScore',function(req, res){
  models.PsycheQuestionScore.findAll().then((questionsScore) => {
    if(questionsScore){
      res.send(questionsScore);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
