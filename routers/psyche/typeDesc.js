'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getTypesDesc',function(req, res){
  models.PsycheTypeDesc.findAll().then((typesDesc) => {
    if(typesDesc){
      res.send(typesDesc);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.get('/getTypeDesc/:id',function(req, res){
  models.PsycheTypeDesc.findAll().then((typeDesc) => {
    if(typeDesc){
      res.send(typeDesc);
    }
  }).catch(function(err){
    res.send(err);
  });
});

router.post('/createTypeDesc',function(req, res){
  let psycheTypeDesc = {
    'typeId' : req.body.typeId,
    'descriptionName' : req.body.descriptionName,
    'descriptionBodyShort' : req.body.descriptionBodyShort,
    'descriptionBody' : req.body.typeId
  };
  models.PsycheTypeDesc.create(psycheTypeDesc).then(function(psycheTypeDesc){
    res.send(psycheTypeDesc);
  });
});

router.put('/updateTypeDesc/:id',function(req, res){
  models.PsycheTypeDesc.update({
    typeId : req.body.typeId,
    descriptionName : req.body.descriptionName,
    descriptionBodyShort : req.body.descriptionBodyShort,
    descriptionBody : req.body.typeId
  }, { where: {'id' : req.params.id}}).then(function(psycheTypeDesc){
    res.send(psycheTypeDesc);
  });
});

router.delete('/deleteTypeDesc/:id',function(req, res){
  models.PsycheTypeDesc.destroy({where: {'id' : req.params.id}}).then(function(){
    res.send();
  });
});

module.exports = router;
