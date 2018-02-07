'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getStats',function(req, res){
  models.SystemStats.findAll().then((systemStats) => {
    if(systemStats){
      res.send(systemStats);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
