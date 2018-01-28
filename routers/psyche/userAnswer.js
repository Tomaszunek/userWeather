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
  models.PsycheUserAnswer.findOne({where: {'userId' : req.params.userId, 'questionId' : req.params.questionId}}).then((userAnswers) => {
    if(userAnswers){
      models.PsycheUserAnswer.update({'answerId' : req.params.answerId}, {where: [{'userId' : req.params.userId}, {'questionId' : req.params.questionId}]}).then((userAnswer2) => {
        if(userAnswer2){
          res.send(userAnswer2);
        }
      }).catch(function(err){
        res.send(err);
      });
    } else {
      models.PsycheUserAnswer.create({'userId' : req.params.userId, 'questionId' : req.params.questionId, 'answerId' : req.params.answerId}).then((userAnswer2) => {
        if(userAnswer2){
          res.send(userAnswer2);
        }
      }).catch(function(err){
        res.send(err);
      });
    }
  }).catch(function(err){
    res.send(err);
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
