'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getQuestions',function(req, res){
  models.PsycheQuestion.findAll().then((questions) => {
    if(questions){
      res.send(questions);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getQuestions/:testId',function(req, res){
  models.PsycheQuestion.findAll({include: [{model : models.PsycheAnswer, as: 'PsycheQuestionAnswer'}]}, {where : {'psycheTestId' : req.params.testId}}).then((questions) => {
    if(questions){
      res.send(questions);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getQuestions/:id',function(req, res){
  models.PsycheQuestion.findOne({where: {'id' : req.params.id}}).then((psycheQuestion) => {
    res.send(psycheQuestion);
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/addQuestion/:testId',function(req, res){
  let question = {
    'testId' : req.params.testId,
    'order' : req.body.order,
    'questionName' : req.body.questionName,
    'questionBody' : req.body.questionBody
  }
  models.PsycheQuestion.create(question).then((question) => {
    res.send(question);
  }).catch(function(err){
    res.send(err);
  });
});

router.put('/updateQuestionScore/:id',function(req, res){
  let question = {
    'testId' : req.body.testId,
    'order' : req.body.order,
    'questionName' : req.body.questionName,
    'questionBody' : req.body.questionBody
  }
  models.PsycheQuestion.update(question, {where: {'id' : req.params.id}}).then((question) => {
    res.send(questionScore);
  }).catch(function(err){
    res.send(err);
  });
});

router.delete('/deleteQuestionScore/:id',function(req, res){
  models.PsycheQuestionScore.destroy({where: {'id' : req.params.id}}).then(() => {
    res.send();
  }).catch(function(err){
    res.send(err);
  });
});



module.exports = router;
