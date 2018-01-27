'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getUserResults',function(req, res){
  models.PsycheUserResult.findAll().then((userResults) => {
    if(userResults){
      res.send(userResults);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
