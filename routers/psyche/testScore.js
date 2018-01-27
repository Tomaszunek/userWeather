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

router.get('/getTestScore/:id',function(req, res){
  models.PsycheTestScore.findOne({where: {'id' : req.params.id}}).then((psycheTestScore) => {
    if(psycheTestScore){
      res.send(psycheTestScore);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createTestScore',function(req, res){
  let psycheTestScore = {
    'typeId' : req.body.typeId,
    'mind' : req.body.mind,
    'energy' : req.body.energy,
    'nature' : req.body.nature,
    'tactict' : req.body.tactict,
    'indentity' : req.body.indentity
  };
  models.PsycheTestScore.create(psycheTestScore).then((psycheTestScore) => {
    res.send(psycheTestScore);
  });
});

router.put('/updateTestScore/:typeId',function(req, res){
  models.PsycheTestScore.update({
    'typeId' : req.body.typeId,
    'mind' : req.body.mind,
    'energy' : req.body.energy,
    'nature' : req.body.nature,
    'tactict' : req.body.tactict,
    'indentity' : req.body.indentity
  }, { where: {'testId' : req.params.typeId}}).then((psycheTestScore) => {
    res.send(psycheTestScore);
  });
});

router.delete('/deleteTestScore/:typeId',function(req, res){
  models.PsycheTestScore.destroy({where: {'typeId' : req.params.typeId}}).then(() => {
    res.send();
  });
});

module.exports = router;
