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

module.exports = router;
