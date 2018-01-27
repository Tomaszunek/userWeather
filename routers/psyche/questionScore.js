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

router.get('/getQuestionScore/:id',function(req, res){
  models.PsycheQuestionScore.findOne({where: {'id' : req.params.id}}).then((questionScore) => {
    res.send(questionScore);
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/addQuestionScore/:questionId',function(req, res){
  let questionScore = {
    'questionId' : req.params.questionId,
    'mind' : req.body.mind,
    'energy' : req.body.energy,
    'nature' : req.body.nature,
    'tactict' : req.body.tactict,
    'indentity' : req.body.indentity
  }
  models.PsycheQuestionScore.create(questionScore).then((questionScore) => {
    res.send(questionScore);
  }).catch(function(err){
    res.send(err);
  });
});

router.put('/updateQuestionScore/:questionId',function(req, res){
  let questionScore = {
    'questionId' : req.params.questionId,
    'mind' : req.body.mind,
    'energy' : req.body.energy,
    'nature' : req.body.nature,
    'tactict' : req.body.tactict,
    'indentity' : req.body.indentity
  }
  models.PsycheQuestionScore.update(questionScore, {where: {'questionId' : req.params.questionId}}).then((questionScore) => {
    res.send(questionScore);
  }).catch(function(err){
    res.send(err);
  });
});

router.delete('/deleteQuestionScore/:questionId',function(req, res){
  models.PsycheQuestionScore.destroy({where: {'questionId' : req.params.questionId}}).then(() => {
    res.send();
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
