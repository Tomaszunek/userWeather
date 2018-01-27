'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getTypes',function(req, res){
  models.PsycheType.findAll().then((types) => {
    if(types){
      res.send(types);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getTypeDesc/:testId',function(req, res){
  models.PsycheType.findOne({where: {'testId' : req.params.testId}}).then((psycheType) => {
    if(psycheType){
      res.send(psycheType);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createTypeDesc/:testId',function(req, res){
  let psycheType = {
    'testId' : req.body.testId,
    'type' : req.body.type
  };
  models.PsycheType.create(psycheType).then((psycheType) => {
    res.send(psycheType);
  });
});

router.put('/updateTypeDesc/:testId',function(req, res){
  models.PsycheType.update({
    'testId' : req.params.testId,
    'type' : req.body.type
  }, { where: {'testId' : req.params.testId}}).then((psycheType) => {
    res.send(psycheType);
  });
});

router.delete('/deleteTypeDesc/:testId',function(req, res){
  models.PsycheType.destroy({where: {'testId' : req.params.testId}}).then(() => {
    res.send();
  });
});


module.exports = router;
