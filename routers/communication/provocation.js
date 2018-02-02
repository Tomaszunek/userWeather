'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAll',function(req, res){
  models.CommunicationProvocation.findAll().then((provovations) => {
    if(provovations){
      res.send(provovations);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
