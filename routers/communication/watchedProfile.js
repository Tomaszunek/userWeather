'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAll',function(req, res){
  models.CommunicationWatchedProfile.findAll().then((watchedProfiles) => {
    if(watchedProfiles){
      res.send(watchedProfiles);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
