'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');
const psycheService = require('./psycheService');

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

router.get('/getUserAnswer/:id',function(req, res){
  models.PsycheUserAnswer.findOne({where: {'id' : req.params.id}}).then((userAnswer) => {
    if(userAnswer){
      res.send(userAnswer);
    }
  }).catch(function(err){
    res.send(err);
  });
});


router.post('/createUserAnswer/:userId/:questionId/:answerId',function(req, res){
  psycheService.createUserAnswer(req.params.userId, req.params.questionId, req.params.answerId).then((questions) => {
    if (questions) {
        res.send(questions);
    } else {
        res.status(400).send('We cant answer');
    }
  }).catch(function (err) {
      res.status(400).send(err);
  });
});

router.put('/updateUserAnswer/:userId/:questionId/:answerId',function(req, res){
  models.PsycheUserAnswer.update({
    typeId : req.params.uderId,
    descriptionName : req.params.questionId,
    descriptionBodyShort : req.params.answerId
  }, { where: {'id' : req.params.id}}).then((PsycheUserAnswer) => {
    res.send(PsycheUserAnswer);
  });
});

router.delete('/deleteUserAnswer/:id',function(req, res){
  models.PsycheUserAnswer.destroy({where: {'id' : req.params.id}}).then(() => {
    res.send();
  });
});

router.delete('/deleteUserAnswers/:userId',function(req, res){
  models.PsycheUserAnswer.destroy({where: {'userId' : req.params.userId}}).then(() => {
    res.send();
  });
});




module.exports = router;
