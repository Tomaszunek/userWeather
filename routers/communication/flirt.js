'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAllFlirs',function(req, res){
  models.CommunicationFiltrUserAnswer.findAll().then((flirtUserAnswer) => {
    if(flirtUserAnswer){
      res.send(flirtUserAnswer);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
