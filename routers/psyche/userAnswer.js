'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getUserAnswers',function(req, res){
  models.PsycheUserAnswer.findAll().then((userAnswers) => {
    if(userAnswers){
      res.send(userAnswers);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createUserAnswer/:userId/:questionId/:answerId',function(req, res){
  models.PsycheUserAnswer.findOne({where: [{'userId' : req.params.userId}, {'questionId' : req.params.userId}, {'userId' : req.params.userId}]}).then((userAnswers) => {
    if(userAnswers){
      models.PsycheUserAnswer.update({'answerId' : req.params.answerId});
    } else {
      models.PsycheUserAnswer.create({'userId' : req.params.userId, 'questionId' : req.params.userId, 'answerId' : req.params.answerId});
    }
  }).catch(function(err){
    res.send(err);
  });
});




module.exports = router;
