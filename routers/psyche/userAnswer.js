'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getUserAnswers',function(req, res){
  models.PsycheUserAnswers.findAll().then((userAnswers) => {
    if(userAnswers){
      res.send(userAnswers);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
