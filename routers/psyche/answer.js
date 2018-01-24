'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAnswers',function(req, res){
  models.PsycheAnswer.findAll().then((answers) => {
    if(answers){
      res.send(answers);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
