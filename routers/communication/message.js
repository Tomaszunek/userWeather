'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAllMassages',function(req, res){
  models.CommunicationMessage.findAll().then((messages) => {
    if(messages){
      res.send(messages);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
