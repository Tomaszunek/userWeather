'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/createResult/:userId/:testId',function(req, res){
  models.PsycheQuestion.findAll({where: {'testId' : req.params.testId}}).then((psycheQuestion) => {
    if(psycheQuestion){
      models.PsycheQuestion.findAll(
        {include: [{model : models.PsycheUserAnswer, on : 'PsycheQuestionUserAnswer'}] ,
        where: {'testId' : req.params.testId, 'userId' : req.params.userId}}).then((userAnswers) => {
          if(psycheQuestion.length = userAnswers.length){
            
          }
          res.send(userAnswers);
        }).catch(function(err){
          res.send(err);
        });
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
