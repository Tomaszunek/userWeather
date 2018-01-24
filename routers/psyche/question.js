'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();

router.get('/getQuestions',function(req, res){
  models.PsycheQuestion.findAll().then((questions) => {
    if(questions){
      res.send(questions);
    }
  }).catch(function(err){
    res.send(err);
  });
});

module.exports = router;
