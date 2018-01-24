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

module.exports = router;
