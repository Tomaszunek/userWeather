'use strict';

const express = require('express');
const models = require('../../models');
const Sequelize = require('sequelize');

const router = express.Router();


router.get('/getFavoriteProfiles',function(req, res){
  models.CommunicationFavoriteUser.findAll().then((favoriteProfiles) => {
    if(favoriteProfiles){
      res.send(favoriteProfiles);
    }
  }).catch(function(err){
    res.send(err);
  });
});


module.exports = router;
