'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAnswers',function(req, res){
  models.PsycheAnswer.findAll().then((answers) => {
    if(answers){
      res.send(answers);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getAnswer/:id',function(req, res){
  models.PsycheAnswer.findOne({where: {'id' : req.params.id}}).then((psycheAnswer) => {
    res.send(psycheAnswer);
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/addQuestion/:questionId',function(req, res){
  let answer = {
    'questionId' : req.params.questionId,
    'answer' : req.body.answer,
    'answerValue' : req.body.answerValue
  }
  models.PsycheAnswer.create(answer).then((psycheAnswer) => {
    res.send(psycheAnswer);
  }).catch(function(err){
    res.send(err);
  });
});

router.put('/updateQuestion/:id',function(req, res){
  let answer = {
    'questionId' : req.body.questionId,
    'answer' : req.body.answer,
    'answerValue' : req.body.answerValue
  }
  models.PsycheAnswer.update(answer, {where: {'id' : req.params.id}}).then((psycheAnswer) => {
    res.send(psycheAnswer);
  }).catch(function(err){
    res.send(err);
  });
});

router.delete('/deleteQuestion/:id',function(req, res){
  models.PsycheAnswer.destroy({where: {'id' : req.params.id}}).then(() => {
    res.send();
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
