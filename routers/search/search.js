'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getSearch',function(req, res){
  models.SearchType.findAll().then((searchType) => {
    if(searchType){
      res.send(searchType);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
