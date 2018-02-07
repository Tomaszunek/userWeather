'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getAllEvents',function(req, res){
  models.EventUser.findAll().then((watchedProfiles) => {
    if(watchedProfiles){
      res.send(watchedProfiles);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
