'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getBlockProfiles',function(req, res){
  models.CommunicationBlackUser.findAll().then((blockProfiles) => {
    if(blockProfiles){
      res.send(blockProfiles);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
