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

module.exports = router;
