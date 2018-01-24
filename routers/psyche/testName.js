'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAllPsyche',function(req, res){
  models.PsycheTestName.findAll().then((psychTest) => {
    res.send(psychTest);
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getPsycheTest/:name',function(req, res){
  models.PsycheTestName.findOne({where: {psycheTestName : req.params.name}}).then((psychTest) => {
    res.send(psychTest);
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/addPsycheTest',function(req, res){
  let psycheTest = {
    psycheTestName : req.body.psycheTestName,
    psycheTestDescription : req.body.psycheTestDescription
  }
  models.PsycheTestName.create(psycheTest).then((psychTest) => {
    res.send(psychTest);
  }).catch(function(err){
    res.send(err);
  });
});

router.put('/updatePsycheTest/:id',function(req, res){
  let psycheTest = {
    psycheTestName : req.body.psycheTestName,
    psycheTestDescription : req.body.psycheTestDescription
  }
  models.PsycheTestName.update(psycheTest, {where: {id : req.params.id}}).then((psychTest) => {
    res.send(psychTest);
  }).catch(function(err){
    res.send(err);
  });
});

router.delete('/deletePsycheTest/:id',function(req, res){
  models.PsycheTestName.destroy({where: {id : req.params.id}}).then(() => {
    res.send();
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
