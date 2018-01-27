'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getRelationConnection',function(req, res){
  models.PsycheRelationConnection.findAll().then((relationConnections) => {
    if(relationConnections){
      res.send(relationConnections);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getRelationConnection/:typeId',function(req, res){
  models.PsycheRelationConnection.findAll({where: {'typeId1' : req.params.typeId}}).then((psycheRelationConnection) => {
    if(psycheRelationConnection){
      res.send(psycheRelationConnection);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getRelationConnection/:typeId/:typeId2',function(req, res){
  models.PsycheRelationConnection.findOne({where: {'typeId1' : req.params.typeId, 'typeId2' : req.params.typeId2}}).then((psycheRelationConnection) => {
    if(psycheRelationConnection){
      res.send(psycheRelationConnection);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createRelationConnection/:typeId1/:typeId2',function(req, res){
  let psycheRelationConnection = {
    'typeId1' : req.params.typeId1,
    'typeId2' : req.params.typeId2,
    'connectionLevel' : req.body.connectionLevel,
    'connectionDescription' : req.body.connectionDescription
  };
  models.PsycheRelationConnection.create(psycheRelationConnection).then((psycheRelationConnection) => {
    res.send(psycheRelationConnection);
  });
});

router.put('/updateRelationConnection/:typeId1/:typeId2',function(req, res){
  let psycheRelationConnection = {
    'connectionLevel' : req.body.connectionLevel,
    'connectionDescription' : req.body.connectionDescription
  }
  models.PsycheRelationConnection.update(psycheRelationConnection, {where: {'typeId1' : req.params.typeId1, 'typeId2' : req.params.typeId2}}).then((psycheRelationConnection) => {
    res.send(psycheRelationConnection);
  }).catch(function(err){
    res.send(err);
  });
});

router.delete('/deleteRelationConnection/:id',function(req, res){
  models.PsycheRelationConnection.destroy({where: {'id' : req.params.id}}).then(() => {
    res.send();
  });
});

module.exports = router;
